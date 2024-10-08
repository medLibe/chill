require('dotenv').config()
const userModel = require('../models/userModel')
const validator = require('validator')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET
const modemailer = require('nodemailer')
const { v4: uuidv4 } = require('uuid')
const sender = process.env.MAIL_USERNAME
const passSender = process.env.MAIL_PASSWORD

const transporter = modemailer.createTransport({
    service: 'gmail',
    auth: {
        user: sender,
        pass: passSender
    }
})

const verifyEmail = async (req, res) => {
    const token = req.query

    try{
        const user = await userModel.findUserByToken(token.token)
        if(!user) return res.status(400).json({message: 'Invalid verification token'})

        await userModel.verifyEmail(user.id)
        res.status(200).json({message: 'Email verified successfully'})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const validateUser = (data) => {
    const errors = []
    if(!validator.isEmail(data.email)) errors.push('Invalid email')
    if(!data.full_name) errors.push('Full name can not be empty')
    if(!data.username) errors.push('Username can not be empty')
    if(!data.phone || data.phone.length < 10) errors.push('Password must be at least 10 digits')
    if(!data.password || data.password.length < 6) errors.push('Password must be at least 6 characters')
    return errors
}

const validateLogin = (data) => {
    const errors = []
    if(!validator.isEmail(data.email)) errors.push('Invalid email')
    if(!data.password) errors.push('Password can not be empty')
    return errors
}

const loginUser = async (req, res) => {
    const {email, password} = req.body
    const errors = validateLogin({email, password})
    if(errors.length) return res.status(400).json({errors})

    try{
        // check if email exists
        const user = await userModel.findUserByEmail(email)
        if(!user){
            return res.status(400).json({error: 'Email not found'})
        }

        // check if password is correct
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return res.status(400).json({error: 'Invalid password'})
        }

        if(!user.email_verified){
            return res.status(400).json({error: 'Email not verified'})
        }

        // generate token
        const token = jwt.sign({id: user.id}, secretKey, {expiresIn: '1d'})

        // return token
        res.status(200).json({token})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

const checkUsernameExists = (username) => {
    return new Promise((resolve, reject) => {
        userModel.findUserByUsername(username, (err, results) => {
            if(err) reject(err)
            resolve(results.length > 0)
        })
    })
}

const checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        userModel.findUserByEmail(email, (err, results) => {
            if(err) reject(err)
            resolve(results.length > 0)
        })
    })
}

const createUser = async (req, res) => {
    const {full_name, username, email, phone, password} = req.body
    const errors = validateUser({full_name, username, email, phone, password})
    if(errors.length) return res.status(400).json({errors})

    try{
        // check if username or already exists
        const [existingUsername, existingEmail] = await Promise.all([
            checkUsernameExists(username),
            checkEmailExists(email)
        ])

        const errors = []


        if(existingUsername){
            errors.push('Username already exists')
        }
      
        if(existingEmail){
            errors.push('Email already exists')
        }

        if(errors.length){
            return res.status(400).json({errors})
        }

        // hashing password first..
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        // generate verification code
        const emailVerificationToken = uuidv4()
        
        // insert data user to database
        userModel.createUser(full_name, username, email, phone, hashedPassword, emailVerificationToken, async (err, result) => {
            console.error('Error while inserting user to database:', err)
            if(err) return res.status(500).json({error: err.message})

            const mailOptions = {
                from: sender,
                to: email,
                subject: 'Email verification',
                text: `Click here to verify your email: http://localhost:5000/api/users/verify-email?token=${emailVerificationToken}`

            }

            transporter.sendMail(mailOptions, (err, info) => {
                if(err){
                    console.error('Error while sending email:', err)
                    return res.status(500).json({error: err.message})
                }

                res.status(200).json({message: 'User added successfully'})
            })
            
        })
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const getAllUsers = (req, res) => {

    // fetch data users from database
    userModel.getAllUsers((err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json(results)
    })
}

const getUserById = (req, res) => {
    const {id} = req.params

    // fetch data user by id from database
    userModel.getUserById(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'User not found'})
        res.status(200).json(results[0])
    })
}

const updateUser = async (req, res) => {
    const {id} = req.params
    const {email, phone, password} = req.body

    // prepare data
    let updateData = {}
    if(email) updateData.email = email
    if(phone) updateData.phone = phone
    
    // validate if password is not empty
    let errors = []
    if(password){
        errors = validateUser({email, phone, password})
        if(errors.length) return res.status(400).json({errors})

        // hashing password
        try{
            const hashedPassword = await bcrypt.hash(password, saltRounds)
            updateData.password = hashedPassword
        }catch(error){
            return res.status(400).json({ error: error.message})
        }
    }

    // if updateData is empty, return error
    if(Object.keys(updateData).length === 0){
        return res.status(400).json({error: 'No data to update'})
    }

    for (const key in updateData) {
        if (typeof updateData[key] !== 'string' && typeof updateData[key] !== 'number') {
            return res.status(400).json({ error: `Invalid data type for ${key}` })
        }
    }

    // update data user
    userModel.updateUser(id, updateData, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'User not found'})
        res.status(200).json({message: 'User updated successfully', id})
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params
    userModel.deleteUser(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'User not found'})
        res.status(200).json({message: 'User deleted successfully'})
    })
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser,
    verifyEmail
}
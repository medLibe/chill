const userModel = require('../models/userModel')
const validator = require('validator')
const bcrypt = require('bcrypt')

const saltRounds = 10

const validateUser = (data) => {
    const errors = []
    if(!validator.isEmail(data.email)) errors.push('Invalid email')
    if(!data.phone || data.phone.length < 10) errors.push('Password must be at least 10 digits')
    if(!data.password || data.password.length < 6) errors.push('Password must be at least 6 characters')
    return errors
}

const createUser = async (req, res) => {
    const {email, phone, password} = req.body
    const errors = validateUser({email, phone, password})
    if(errors.length) return res.status(400).json({errors})

    try{
        // hashing password first..
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        
        // insert data user to database
        userModel.createUser(email, phone, hashedPassword, (err, results) => {
            if(err) return res.status(500).json({error: err.message})
            res.status(200).json({message: 'User added successfully'})
        })
    }catch(error){
        res.status(500).json({error: "Failed to hash password"})
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
            return res.status(400).json({ error: 'Failed to hash password'})
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
    deleteUser
}
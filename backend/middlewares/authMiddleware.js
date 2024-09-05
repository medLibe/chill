require('dotenv').config()
const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401).json({error: 'No token provided'})

    jwt.verify(token, secretKey, async (err, user) => {
        if(err) return res.sendStatus(403).json({error: 'Invalid token'})
        
        try{
            const dbUser = await userModel.findUserById(user.id)
            if(!dbUser) return res.status(404).json({error: 'User not found'})
            
            if(!dbUser.email_verified) return res.status(403).json({error: 'Email not verified. Please verify your email to access this resource.'})

            req.user = dbUser
            next()
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    })
}

module.exports = authenticateToken
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authenticateToken = require('../middlewares/authMiddleware')


// verify email
router.get('/verify-email', userController.verifyEmail)

// Register & Login
router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)

router.get('/', authenticateToken, userController.getAllUsers)
router.get('/:id', authenticateToken, userController.getUserById)
router.put('/:id', authenticateToken, userController.updateUser)
router.delete('/:id', authenticateToken, userController.deleteUser)

module.exports = router

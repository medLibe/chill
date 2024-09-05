const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/paymentController')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/', authenticateToken, paymentController.createPayment)
router.get('/', authenticateToken, paymentController.getAllPayments)
router.get('/user', authenticateToken, paymentController.getPaymentByUserId)
router.get('/:id', authenticateToken, paymentController.getPaymentById)

module.exports = router

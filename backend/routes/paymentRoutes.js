const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/paymentController')

router.post('/', paymentController.createPayment)
router.get('/', paymentController.getAllPayments)
router.get('/user', paymentController.getPaymentByUserId)
router.get('/:id', paymentController.getPaymentById)

module.exports = router

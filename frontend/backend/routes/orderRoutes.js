const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.createOrder)
router.get('/', orderController.getAllOrders)
router.get('/user', orderController.getOrderByUserId)
router.get('/:id', orderController.getOrderById)
router.delete('/:id', orderController.cancelOrder)

module.exports = router

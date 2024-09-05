const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/', authenticateToken, orderController.createOrder)
router.get('/', authenticateToken, orderController.getAllOrders)
router.get('/user', authenticateToken, orderController.getOrderByUserId)
router.get('/:id', authenticateToken, orderController.getOrderById)
router.delete('/:id', authenticateToken, orderController.cancelOrder)

module.exports = router

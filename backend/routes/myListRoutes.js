const express = require('express')
const router = express.Router()
const myListController = require('../controllers/myListController')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/', authenticateToken, myListController.addToMyList)
router.get('/:user_id', authenticateToken, myListController.getAllMyListByUserId)
router.delete('/:id/:type', authenticateToken, myListController.removeFromMyList)

module.exports = router

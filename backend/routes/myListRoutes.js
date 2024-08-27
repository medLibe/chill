const express = require('express')
const router = express.Router()
const myListController = require('../controllers/myListController')

router.post('/', myListController.addToMyList)
router.get('/:user_id', myListController.getAllMyListByUserId)
router.delete('/:id/:type', myListController.removeFromMyList)

module.exports = router

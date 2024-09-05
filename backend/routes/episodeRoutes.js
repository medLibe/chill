const express = require('express')
const router = express.Router()
const episodeController = require('../controllers/episodeController')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/', authenticateToken, episodeController.createEpisode)
router.get('/', authenticateToken, episodeController.getAllEpisodes)
router.get('/:id', authenticateToken, episodeController.getEpisodeById)
router.put('/:id', authenticateToken, episodeController.updateEpisode)
router.delete('/:id', authenticateToken, episodeController.deleteEpisode)

module.exports = router

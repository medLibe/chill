const express = require('express')
const router = express.Router()
const episodeController = require('../controllers/episodeController')

router.post('/', episodeController.createEpisode)
router.get('/', episodeController.getAllEpisodes)
router.get('/:id', episodeController.getEpisodeById)
router.put('/:id', episodeController.updateEpisode)
router.delete('/:id', episodeController.deleteEpisode)

module.exports = router

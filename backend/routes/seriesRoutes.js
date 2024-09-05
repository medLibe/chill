const express = require('express')
const router = express.Router()
const seriesController = require('../controllers/seriesController')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/', authenticateToken, seriesController.createSeries)
router.get('/', authenticateToken, seriesController.getAllSeries)
router.get('/:id', authenticateToken, seriesController.getSeriesById)
router.put('/:id', authenticateToken, seriesController.updateSeries)
router.delete('/:id', authenticateToken, seriesController.deleteSeries)

module.exports = router

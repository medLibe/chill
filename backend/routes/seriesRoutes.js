const express = require('express')
const router = express.Router()
const seriesController = require('../controllers/seriesController')

router.post('/', seriesController.createSeries)
router.get('/', seriesController.getAllSeries)
router.get('/:id', seriesController.getSeriesById)
router.put('/:id', seriesController.updateSeries)
router.delete('/:id', seriesController.deleteSeries)

module.exports = router

const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
const genreRoutes = require('./genreRoutes')
const movieRoutes = require('./movieRoutes')
const seriesRoutes = require('./seriesRoutes')
const episodeRoutes = require('./episodeRoutes')
const myListRoutes = require('./myListRoutes')
const packageRoutes = require('./packageRoutes')
const orderRoutes = require('./orderRoutes')
const paymentRoutes = require('./paymentRoutes')

router.use('/users', userRoutes)
router.use('/genres', genreRoutes)
router.use('/movies', movieRoutes)
router.use('/series', seriesRoutes)
router.use('/episodes', episodeRoutes)
router.use('/mylists', myListRoutes)
router.use('/packages', packageRoutes)
router.use('/orders', orderRoutes)
router.use('/payments', paymentRoutes)

module.exports = router
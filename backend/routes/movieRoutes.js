const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/', authenticateToken, movieController.createMovie)
router.get('/', authenticateToken, movieController.getAllMovies)
router.get('/filter', authenticateToken, movieController.getMoviesByFilter)
router.get('/sort', authenticateToken, movieController.getMoviesBySort)
router.get('/search', authenticateToken, movieController.getMoviesBySearch)
router.get('/:id', authenticateToken, movieController.getMovieById)
router.put('/:id', authenticateToken, movieController.updateMovie)
router.delete('/:id', authenticateToken, movieController.deleteMovie)

module.exports = router

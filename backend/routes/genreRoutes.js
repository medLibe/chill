const express = require('express')
const router = express.Router()
const genreController = require('../controllers/genreController')
const authenticateToken = require('../middlewares/authMiddleware')

router.post('/', authenticateToken, genreController.createGenre)
router.get('/', authenticateToken, genreController.getAllGenres)
router.get('/:id', authenticateToken, genreController.getGenreById)
router.put('/:id', authenticateToken, genreController.updateGenre)
router.delete('/:id', authenticateToken, genreController.deleteGenre)

module.exports = router

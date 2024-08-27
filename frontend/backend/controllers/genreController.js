const genreModel = require('../models/genreModel')
const validator = require('validator')

const validateGenre = (data) => {
    const errors = []
    if(!data.genre_name) errors.push('Genre can not be empty')
    return errors
}

const createGenre = async (req, res) => {
    const {genre_name} = req.body
    const errors = validateGenre({genre_name})
    if(errors.length > 0) return res.status(400).json({errors})

    genreModel.createGenre(genre_name, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json({message: 'Genre added successfully'})
    })
}

const getAllGenres = (req, res) => {

    // fetch data users from database
    genreModel.getAllGenres((err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json(results)
    })
}

const getGenreById = (req, res) => {
    const {id} = req.params

    // fetch data user by id from database
    genreModel.getGenreById(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'Genre not found'})
        res.status(200).json(results[0])
    })
}

const updateGenre = async (req, res) => {
    const {id} = req.params
    const {genre_name} = req.body

    errors = validateGenre({genre_name})
    if(errors.length) return res.status(400).json({errors})

    // update data genre
    genreModel.updateGenre(id, genre_name, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Genre not found'})
        res.status(200).json({message: 'Genre updated successfully', id})
    })
}

const deleteGenre = (req, res) => {
    const {id} = req.params
    genreModel.deleteGenre(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Genre not found'})
        res.status(200).json({message: 'Genre deleted successfully'})
    })
}

module.exports = {
    createGenre,
    getAllGenres,
    getGenreById,
    updateGenre,
    deleteGenre
}
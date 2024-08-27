const movieModel = require('../models/movieModel')
const validator = require('validator')

const validateMovie = (data) => {
    const errors = []
    if(!data.genre_id) errors.push('Please select a genre first')
    if(!data.title) errors.push('Title can not be empty')
    if(!data.release_date) errors.push('Release date can not be empty')
    if(!data.director) errors.push('Director can not be empty')
    if(!data.duration || data.duration <= 0) errors.push('Duration can not be empty')
    if(!data.rating || data.rating <= 0) errors.push('Rating can not be empty')
    return errors
}

const createMovie = async (req, res) => {
    const {genre_id, title, release_date, director, duration, rating} = req.body
    const errors = validateMovie({genre_id, title, release_date, director, duration, rating})
    if(errors.length > 0) return res.status(400).json({errors})

    movieModel.createMovie(genre_id, title, release_date, director, duration, rating, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json({message: 'Movie added successfully'})
    })
}

const getAllMovies = (req, res) => {

    // fetch data users from database
    movieModel.getAllMovies((err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json(results)
    })
}

const getMovieById = (req, res) => {
    const {id} = req.params

    // fetch data user by id from database
    movieModel.getMovieById(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'Movie not found'})
        res.status(200).json(results[0])
    })
}

const updateMovie = async (req, res) => {
    const {id} = req.params
    const {genre_id, title, release_date, director, duration, rating} = req.body

    // prepare data
    let updateData = {}
    if (genre_id !== undefined && genre_id !== '') updateData.genre_id = genre_id
    if (title !== undefined && title !== '') updateData.title = title
    if (release_date !== undefined && release_date !== '') updateData.release_date = release_date
    if (director !== undefined && director !== '') updateData.director = director
    if (duration !== undefined && duration !== '') updateData.duration = duration
    if (rating !== undefined && rating !== '') updateData.rating = rating

    // validate data
    let errors = validateMovie(updateData)
    if(errors.length) return res.status(400).json({errors})

    // if updateData is empty, return error
    if(Object.keys(updateData).length === 0){
        return res.status(400).json({ error: 'No data to update'})
    }

    for (const key in updateData) {
        if (typeof updateData[key] !== 'string' && typeof updateData[key] !== 'number') {
            return res.status(400).json({ error: `Invalid data type for ${key}` })
        }
    }

    // update data movie
    movieModel.updateMovie(id, updateData, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Movie not found'})
        res.status(200).json({message: 'Movie updated successfully', id})
    })
}

const deleteMovie = (req, res) => {
    const {id} = req.params
    movieModel.deleteMovie(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Movie not found'})
        res.status(200).json({message: 'Movie deleted successfully'})
    })
}

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
}
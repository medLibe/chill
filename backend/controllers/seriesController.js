const seriesModel = require('../models/seriesModel')
const validator = require('validator')

const validateSeries = (data) => {
    const errors = []
    if(!data.genre_id) errors.push('Please select a genre first')
    if(!data.title) errors.push('Title can not be empty')
    if(!data.release_date) errors.push('Release date can not be empty')
    if(!data.director) errors.push('Director can not be empty')
    if(!data.total_season || data.total_season <= 0) errors.push('Total season can not be empty')
    if(!data.rating || data.rating <= 0) errors.push('Rating can not be empty')
    return errors
}

const createSeries = async (req, res) => {
    const {genre_id, title, release_date, director, total_season, rating} = req.body
    const errors = validateSeries({genre_id, title, release_date, director, total_season, rating})
    if(errors.length > 0) return res.status(400).json({errors})

    seriesModel.createSeries(genre_id, title, release_date, director, total_season, rating, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json({message: 'Series added successfully'})
    })
}

const getAllSeries = (req, res) => {

    // fetch data users from database
    seriesModel.getAllSeries((err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json(results)
    })
}

const getSeriesById = (req, res) => {
    const {id} = req.params

    // fetch data user by id from database
    seriesModel.getSeriesById(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'Series not found'})
        res.status(200).json(results[0])
    })
}

const updateSeries = async (req, res) => {
    const {id} = req.params
    const {genre_id, title, release_date, director, total_season, rating} = req.body

    // prepare data
    let updateData = {}
    if (genre_id !== undefined && genre_id !== '') updateData.genre_id = genre_id
    if (title !== undefined && title !== '') updateData.title = title
    if (release_date !== undefined && release_date !== '') updateData.release_date = release_date
    if (director !== undefined && director !== '') updateData.director = director
    if (total_season !== undefined && total_season !== '') updateData.total_season = total_season
    if (rating !== undefined && rating !== '') updateData.rating = rating

    // validate data
    let errors = validateSeries(updateData)
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
    seriesModel.updateSeries(id, updateData, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Series not found'})
        res.status(200).json({message: 'Series updated successfully', id})
    })
}

const deleteSeries = (req, res) => {
    const {id} = req.params
    seriesModel.deleteSeries(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Series not found'})
        res.status(200).json({message: 'Series deleted successfully'})
    })
}

module.exports = {
    createSeries,
    getAllSeries,
    getSeriesById,
    updateSeries,
    deleteSeries
}
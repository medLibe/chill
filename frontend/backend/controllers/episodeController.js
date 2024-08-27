const episodeModel = require('../models/episodeModel')
const validator = require('validator')

const validateEpisode = (data) => {
    const errors = []
    if(!data.series_id) errors.push('Please select a series first')
    if(!data.episode_title) errors.push('Title can not be empty')
    if(!data.season_number || data.season_number <= 0) errors.push('Season number can not be empty')
    if(!data.episode_number || data.episode_number <= 0) errors.push('Episode number can not be empty')
    if(!data.release_date || data.release_date <= 0) errors.push('Release date can not be empty')
    return errors
}

const createEpisode = async (req, res) => {
    const {series_id, episode_title, season_number, episode_number, release_date} = req.body
    const errors = validateEpisode({series_id, episode_title, season_number, episode_number, release_date})
    if(errors.length > 0) return res.status(400).json({errors})

    episodeModel.createEpisode(series_id, episode_title, season_number, episode_number, release_date, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json({message: 'Episode added successfully'})
    })
}

const getAllEpisodes = (req, res) => {

    // fetch data users from database
    episodeModel.getAllEpisodes((err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json(results)
    })
}

const getEpisodeById = (req, res) => {
    const {id} = req.params

    // fetch data user by id from database
    episodeModel.getEpisodeById(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'Episode not found'})
        res.status(200).json(results[0])
    })
}

const updateEpisode = async (req, res) => {
    const {id} = req.params
    const {series_id, episode_title, season_number, episode_number, release_date} = req.body

    // prepare data
    let updateData = {}
    if (series_id !== undefined && series_id !== '') updateData.series_id = series_id
    if (episode_title !== undefined && episode_title !== '') updateData.episode_title = episode_title
    if (season_number !== undefined && season_number !== '') updateData.season_number = season_number
    if (episode_number !== undefined && episode_number !== '') updateData.episode_number = episode_number
    if (release_date !== undefined && release_date !== '') updateData.release_date = release_date

    // validate data
    let errors = validateEpisode(updateData)
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
    episodeModel.updateEpisode(id, updateData, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Episode not found'})
        res.status(200).json({message: 'Episode updated successfully', id})
    })
}

const deleteEpisode = (req, res) => {
    const {id} = req.params
    episodeModel.deleteEpisode(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Episode not found'})
        res.status(200).json({message: 'Episode deleted successfully'})
    })
}

module.exports = {
    createEpisode,
    getAllEpisodes,
    getEpisodeById,
    updateEpisode,
    deleteEpisode
}
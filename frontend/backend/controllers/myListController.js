const myListModel = require('../models/myListModel')

const addToMyList = async (req, res) => {
    const {user_id, series_id, movie_id} = req.body

    // convert empty string to null
    const seriesId = series_id === '' ? null : series_id
    const movieId = movie_id === '' ? null : movie_id

    // validate data
    if(!seriesId && !movieId){
        return res.status(400).json({error: 'Please select a series or movie first'})
    }

    if(seriesId && movieId){
        return res.status(400).json({error: 'Please select only one series or movie'})
    }

    try{
        let existingEntry = await myListModel.checkExistingEntry(user_id, seriesId, movieId)
        
        if(existingEntry.length > 0){
            return res.status(400).json({error: 'A Film already added'})
        }

        myListModel.addToMyList(user_id, seriesId, movieId)
        return res.status(200).json({message: 'Added to My List'})
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

const getAllMyListByUserId = (req, res) => {
    const {user_id} = req.params

    // fetch data user by id from database
    myListModel.getAllMyListByUserId(user_id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'User not found'})
        res.status(200).json(results)
    })
}

const removeFromMyList = (req, res) => {
    const {id, type} = req.params
    const {user_id} = req.body

    if(!['series', 'movie'].includes(type)){
        return res.status(400).json({error: 'Invalid type'})
    }

    // fetch data user by id from database
    myListModel.removeFromMyList(id, type, user_id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Entry not found'})
        res.status(200).json({message: 'Entry deleted successfully'})
    })
}

module.exports = {
    addToMyList,
    getAllMyListByUserId,
    removeFromMyList
}
const connection = require('../database/connection')

const addToMyList = (user_id, series_id, movie_id, callback) => {
    const query = 'INSERT INTO mylists (user_id, series_id, movie_id) VALUES (?,?,?)'
    connection.query(query, [user_id, series_id, movie_id], callback)
}

const getAllMyListByUserId = (user_id, callback) => {
    const query = `
            SELECT mylists.user_id,
                mylists.series_id,
                mylists.movie_id,
                series.title AS series_title,
                movies.title AS movie_title
            FROM mylists
            LEFT JOIN series ON mylists.series_id = series.id
            LEFT JOIN movies ON mylists.movie_id = movies.id
            WHERE mylists.user_id = ?`

    // connection.query(query, [user_id], callback)
    connection.query(query, [user_id], (err, results) => {
        if (err) {
            return callback(err, null)
        }
        callback(null, results)
    })
}

const checkExistingEntry = (user_id, series_id, movie_id) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT mylists.user_id, mylists.series_id, mylists.movie_id, 
                   series.title AS series_title, movies.title AS movie_title
            FROM mylists
            LEFT JOIN series ON mylists.series_id = series.id
            LEFT JOIN movies ON mylists.movie_id = movies.id
            WHERE mylists.user_id = ? AND (mylists.series_id = ? OR mylists.movie_id = ?)`

        connection.query(query, [user_id, series_id, movie_id], (err, results) => {
            if (err) {
                return reject(err)
            }
            resolve(results)
        })
    })
}

const removeFromMyList = (id, type, user_id, callback) => {
    let query
    const queryParams = [user_id]

    if(type === 'series'){
        query = 'DELETE FROM mylists WHERE series_id = ? AND user_id = ?'
        queryParams.unshift(id)
    }else if(type === 'movie'){
        query = 'DELETE FROM mylists WHERE movie_id = ? AND user_id = ?'
        queryParams.unshift(id)
    }

    connection.query(query, queryParams, callback)
}

module.exports = {
    addToMyList,
    getAllMyListByUserId,
    checkExistingEntry,
    removeFromMyList
}
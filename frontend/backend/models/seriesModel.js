const connection = require('../database/connection')

const createSeries = (genre_id, title, release_date, director, total_season, rating, callback) => {
    const query = 'INSERT INTO series (genre_id, title, release_date, director, total_season, rating) VALUES (?,?,?,?,?,?)'
    connection.query(query, [genre_id, title, release_date, director, total_season, rating], callback)
}

const getAllSeries = (callback) => {
    const query = `
        SELECT series.id, series.title, series.release_date, series.director, series.total_season, series.rating, genres.genre_name
        FROM series
        INNER JOIN genres ON series.genre_id = genres.id`
    connection.query(query, callback)
}

const getSeriesById = (id, callback) => {
    const query = `
    SELECT movies.id, movies.title, movies.release_date, movies.director, movies.duration, movies.rating, genres.genre_name
    FROM movies
    INNER JOIN genres ON movies.genre_id = genres.id
    WHERE movies.id = ?`
    connection.query(query, [id], callback)
}

const updateSeries = (id, updateData, callback) => {
    let query = 'UPDATE series SET '
    const queryValues = []

    Object.keys(updateData).forEach((key, index) => {
        query += `${key} = ?`
        queryValues.push(updateData[key])
        if (index < Object.keys(updateData).length - 1) {
            query += ', '
        }
    })

    query += ' WHERE id = ?'
    queryValues.push(id)

    connection.query(query, queryValues, callback)
}

const deleteSeries = (id, callback) => {
    const query = 'DELETE FROM series WHERE id = ?'
    connection.query(query, [id], callback)
}

module.exports = {
    createSeries,
    getAllSeries,
    getSeriesById,
    updateSeries,
    deleteSeries
}
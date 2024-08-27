const connection = require('../database/connection')

const createMovie = (genre_id, title, release_date, director, duration, rating, callback) => {
    const query = 'INSERT INTO movies (genre_id, title, release_date, director, duration, rating) VALUES (?,?,?,?,?,?)'
    connection.query(query, [genre_id, title, release_date, director, duration, rating], callback)
}

const getAllMovies = (callback) => {
    const query = `
        SELECT movies.id, movies.title, movies.release_date, movies.director, movies.duration, movies.rating, genres.genre_name
        FROM movies
        INNER JOIN genres ON movies.genre_id = genres.id`
    connection.query(query, callback)
}

const getMovieById = (id, callback) => {
    const query = `
    SELECT movies.id, movies.title, movies.release_date, movies.director, movies.duration, movies.rating, genres.genre_name
    FROM movies
    INNER JOIN genres ON movies.genre_id = genres.id
    WHERE movies.id = ?`
    connection.query(query, [id], callback)
}

const updateMovie = (id, updateData, callback) => {
    let query = 'UPDATE movies SET '
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

const deleteMovie = (id, callback) => {
    const query = 'DELETE FROM movies WHERE id = ?'
    connection.query(query, [id], callback)
}

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
}
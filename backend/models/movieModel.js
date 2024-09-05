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

const getMoviesByFilter = (filter, callback) => {
    const {genre_id, title, release_date, director, duration, rating} = req.query

    let query = 'SELECT * FROM MOVIES WHERE 1=1'
    const queryValues = []
    
    if(genre_id){
        query += ' AND genre_id = ?'
        queryValues.push(genre_id)
    }

    if(title){
        query += ' AND title = ?'
        queryValues.push(title)
    }

    if(release_date){
        query += ' AND release_date = ?'
        queryValues.push(release_date)
    }

    if(director){
        query += ' AND director = ?'
        queryValues.push(`%${director}%`)
    }

    if(duration){
        query += ' AND duration = ?'
        queryValues.push(duration)
    }

    if(rating){
        query += ' AND rating = ?'
        queryValues.push(rating)
    }

    connection.query(query, queryValues, callback)
}

const getMoviesBySort = (sort, callback) => {
    const { sortBy, order = 'ASC' } = sort
    const validSortFields = ['genre_id', 'release_date', 'title']
    if(!validSortFields.includes(sortBy)){
        return callback(new Error('Invalid sort field'), null)
    }

    const query = `SELECT * FROM movies ORDER BY ${sortBy} ${order}`
    connection.query(query, callback)
}

const getMoviesBySearch = (search, callback) => {
    const { searchTerm } = search
    const query = 'SELECT * FROM movies WHERE title LIKE ? OR director LIKE ?'
    const queryValues = [`%${searchTerm}%`, `%${searchTerm}%`]

    connection.query(query, queryValues, callback)
}

const updateMovie = (id, updateData, callback) => {
    // Start building the query
    let query = 'UPDATE movies SET '
    const queryValues = []

    // Loop through the updateData object and add each key/value pair to the query
    Object.keys(updateData).forEach((key, index) => {
        query += `${key} = ?`
        queryValues.push(updateData[key])
        // Add a comma if it's not the last pair
        if (index < Object.keys(updateData).length - 1) {
            query += ', '
        }
    })

    // Add the WHERE clause
    query += ' WHERE id = ?'
    // Add the id to the query values
    queryValues.push(id)

    // Execute the query
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
    deleteMovie,
    getMoviesBySort,
    getMoviesByFilter,
    getMoviesBySearch
}
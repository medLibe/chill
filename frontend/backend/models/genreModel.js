const connection = require('../database/connection')

const createGenre = (genre_name, callback) => {
    const query = 'INSERT INTO genres (genre_name) VALUES (?)'
    connection.query(query, [genre_name], callback)
}

const getAllGenres = (callback) => {
    const query = 'SELECT * FROM genres'
    connection.query(query, callback)
}

const getGenreById = (id, callback) => {
    const query = 'SELECT * FROM genres WHERE id = ?'
    connection.query(query, [id], callback)
}

const updateGenre = (id, genre_name, callback) => {
    const query = 'UPDATE genres SET genre_name = ? WHERE id = ?'
    connection.query(query, [genre_name, id], callback)
}

const deleteGenre = (id, callback) => {
    const query = 'DELETE FROM genres WHERE id = ?'
    connection.query(query, [id], callback)
}

module.exports = {
    createGenre,
    getAllGenres,
    getGenreById,
    updateGenre,
    deleteGenre
}
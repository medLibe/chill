const connection = require('../database/connection')

const createUser = (email, phone, password, callback) => {
    const query = 'INSERT INTO users (email, phone, password) VALUES (?,?,?)'
    connection.query(query, [email, phone, password], callback)
}

const getAllUsers = (callback) => {
    const query = 'SELECT * FROM users'
    connection.query(query, callback)
}

const getUserById = (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?'
    connection.query(query, [id], callback)
}

const updateUser = (id, updateData, callback) => {
    let query = 'UPDATE users SET '
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

const deleteUser = (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?'
    connection.query(query, [id], callback)
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
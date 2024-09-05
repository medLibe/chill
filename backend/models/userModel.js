const connection = require('../database/connection')

const createUser = (full_name, username, email, phone, password, email_verification_token,  callback) => {
    const query = 'INSERT INTO users (full_name, username, email, phone, password, email_verification_token) VALUES (?,?,?,?,?,?)'
    connection.query(query, [full_name, username, email, phone, password, email_verification_token], callback)
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

const findUserByUsername = (username, callback) => {
    const query = 'SELECT * FROM users WHERE username = ?'
    connection.query(query, [username], callback)
}

const findUserByEmail = (email, callback) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE email = ?'
        
        connection.query(query, [email], (err, result) => {
            if (err) return reject(err)
            if (result.length === 0) return resolve(null)
            resolve(result[0])
        })
    })
}

const findUserByToken = (email_verification_token) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE email_verification_token = ?'
   
        connection.query(query, [email_verification_token], (err, result) => {
            if(err) return reject(err)
            if(result.length === 0) return resolve(null)
            resolve(result[0])
        })
    })
}

const verifyEmail = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE users SET email_verified = true, email_verification_token = NULL WHERE id = ?'
        connection.query(query, [id], (err, result) => {
            if(err) return reject(err)
            if(result.affectedRows === 0) return reject(new Error('User not found'))
            resolve(result)
        })
    })
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    findUserByUsername,
    findUserByEmail,
    findUserByToken,
    verifyEmail
}
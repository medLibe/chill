const connection = require('../database/connection')

const createPackage = (package_name, description, price, duration, callback) => {
    const query = 'INSERT INTO packages (package_name, description, price, duration) VALUES (?,?,?,?)'
    connection.query(query, [package_name, description, price, duration], callback)
}

const getAllPackages = (callback) => {
    const query = 'SELECT * FROM packages'
    connection.query(query, callback)
}

const getPackageById = (id, callback) => {
    const query = 'SELECT * FROM packages WHERE id = ?'
    connection.query(query, [id], callback)
}

const updatePackage = (id, updateData, callback) => {
    const setClause = Object.keys(updateData)
        .map(key => `${key} = ?`)
        .join(', ')

    const query = `UPDATE packages
                    SET ${setClause} WHERE id = ?`

    const values = [...Object.values(updateData), id]
    connection.query(query, values, callback)
}

const deletePackage = (id, callback) => {
    const query = 'DELETE FROM packages WHERE id = ?'
    connection.query(query, [id], callback)
}

module.exports = {
    createPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    deletePackage
}
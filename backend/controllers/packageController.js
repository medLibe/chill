const packageModel = require('../models/packageModel')
const validator = require('validator')

const validatePackage = (data) => {
    const errors = []
    if(!data.package_name) errors.push('Genre can not be empty')
    if(!data.description) errors.push('Genre can not be empty')

    if (data.price === undefined || data.price === null) {
        errors.push('Price cannot be empty');
    } else {
        if (typeof data.price !== 'number') {
            errors.push('Price must be a number');
        } else if (data.price <= 0) {
            errors.push('Price must be greater than 0');
        }
    }

    if (data.duration === undefined || data.duration === null) {
        errors.push('Duration cannot be empty');
    } else {
        if (typeof data.duration !== 'number') {
            errors.push('Duration must be a number');
        } else if (data.duration <= 0) {
            errors.push('Duration must be greater than 0');
        }
    }

    return errors
}

const createPackage = async (req, res) => {
    const {package_name, description, price, duration} = req.body
    const errors = validatePackage({package_name, description, price, duration})
    if(errors.length > 0) return res.status(400).json({errors})

    packageModel.createPackage(package_name, description, price, duration, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json({message: 'Package added successfully'})
    })
}

const getAllPackages = (req, res) => {

    // fetch data users from database
    packageModel.getAllPackages((err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json(results)
    })
}

const getPackageById = (req, res) => {
    const {id} = req.params

    // fetch data user by id from database
    packageModel.getPackageById(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'Genre not found'})
        res.status(200).json(results[0])
    })
}

const updatePackage = async (req, res) => {
    const {id} = req.params
    const {package_name, description, price, duration} = req.body

    let updateData = {}
    if (package_name !== undefined && package_name !== '') updateData.package_name = package_name
    if (description !== undefined && description !== '') updateData.description = description
    if (price !== undefined && price !== '' && typeof price === 'number' && price > 0) updateData.price = price
    if (duration !== undefined && duration !== '' && typeof duration === 'number' && duration > 0) updateData.duration = duration

    let errors = validatePackage(updateData)
    if(errors.length) return res.status(400).json({errors})

    if(Object.keys(updateData).length === 0){
        return res.status(400).json({ error: 'No data to update'})
    }

    for(const key in updateData){
        if(typeof updateData[key] !== 'string' && typeof updateData[key] !== 'number'){
            return res.status(400).json({ error: `Invalid data type for ${key}`})
        }
    }

    // update data genre
    packageModel.updatePackage(id, updateData, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Package not found'})
        res.status(200).json({message: 'Package updated successfully', id})
    })
}

const deletePackage = (req, res) => {
    const {id} = req.params
    packageModel.deletePackage(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.affectedRows === 0) return res.status(404).json({error: 'Genre not found'})
        res.status(200).json({message: 'Genre deleted successfully'})
    })
}

module.exports = {
    createPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    deletePackage
}
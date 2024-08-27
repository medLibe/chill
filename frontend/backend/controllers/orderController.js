const orderModel = require('../models/orderModel')
const validator = require('validator')

const validateOrder = (data) => {
    const errors = []
    if(!data.package_id) errors.push('Please select a package first')
    if(!data.order_date) errors.push('Order date can not be empty')
    if(!data.order_no) errors.push('Order ID can not be empty')
    return errors
}

const generateOrderNo = () => {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = String(now.getFullYear()).slice(-2)
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')

    return `OD${year}${month}${day}${hour}${minute}`
}

const createOrder = async (req, res) => {
    const {user_id, package_id, order_date, status} = req.body

    // generate order_no
    const order_no = generateOrderNo()

    // validate input data
    const errors = validateOrder({package_id, order_date, order_no})
    if(errors.length > 0) return res.status(400).json({errors})

    try{
        // check if user already has an active package
        const activePackageExists = await new Promise((resolve, reject) => {
            orderModel.checkActivePackageExists(user_id, (err, results) => {
                if(err) return reject(err)
                resolve(results.length > 0)
            })
        })

        if(activePackageExists){
            return res.status(400).json({error: 'User already has an active package'})
        }

        // check if order_no already exists
        const exists = await new Promise((resolve, reject) => {
            orderModel.checkOrderNoExists(order_no, (err, exists) => {
                if(err) return reject(err)
                resolve(exists)
            })
        })

        if(exists){
            return res.status(400).json({error: 'Order ID already exists'})

        }

        orderModel.createOrder(user_id, package_id, order_date, order_no, (err, results) => {
            if(err) return res.status(500).json({error: err.message})
            res.status(200).json({message: 'Order added successfully', order_no})
        })
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

const getAllOrders = (req, res) => {

    // fetch data users from database
    orderModel.getAllOrders((err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json(results)
    })
}

const getOrderById = (req, res) => {
    const {id} = req.params

    // fetch data user by id from database
    orderModel.getOrderById(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'Order not found'})
        res.status(200).json(results[0])
    })
}

const getOrderByUserId = (req, res) => {
    const {user_id} = req.body

    // fetch data user by id from database
    orderModel.getOrderByUserId(user_id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'User not found'})
        res.status(200).json(results[0])
    })
}

const cancelOrder = async (req, res) => {
    /**
     * status 0 = canceled
     * status 1 = active
     * status 2 = completed
     * status 3 = expired
     */
    const {id} = req.params

    try{
        const order = await new Promise((resolve, reject) => {
            orderModel.getOrderById(id, (err, results) => {
                if(err) return reject(err)
                if(results.length === 0) return resolve(null)
                resolve(results[0])
            })
        })

        if(!order) return res.status(404).json({error: 'Order not found'})

        // check if order is already cancelled
        if(order.status === 0) return res.status(400).json({error: 'Order is already cancelled'})
        // check if order is already active
        if(order.status === 2) return res.status(400).json({error: 'Cannot cancel a completed order'})
        // check if order is already expired
        if(order.status === 3) return res.status(400).json({error: 'Cannot cancel an expired order'})
        
        await new Promise((resolve, reject) => {
            orderModel.cancelOrder(id, (err, results) => {
                if(err) return reject(err)
                resolve(results)
            })
        })

        res.status(200).json({message: 'Order canceled successfully'})
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrderByUserId,
    cancelOrder
}
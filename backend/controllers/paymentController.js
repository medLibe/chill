const paymentModel = require('../models/paymentModel')
const validator = require('validator')

const validatePayment = (data) => {
    const errors = []
    if(!data.order_id) errors.push('Order id can not be empty')
    if(!data.payment_date) errors.push('Payment date can not be empty')
    if(!data.payment_method) errors.push('Payment method can not be empty')

    if (data.amount === undefined || data.amount === null) {
        errors.push('Amount cannot be empty');
    } else {
        if (typeof data.amount !== 'number') {
            errors.push('Amount must be a number');
        } else if (data.amount <= 0) {
            errors.push('Amount must be greater than 0');
        }
    }
    return errors
}

const generatePaymentNo = () => {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = String(now.getFullYear()).slice(-2)
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')

    return `PY${year}${month}${day}${hour}${minute}`
}

const createPayment = async (req, res) => {
    const {order_id, payment_date, amount, payment_method} = req.body

    // generate payment_no
    const payment_no = generatePaymentNo()

    // validate input data
    const errors = validatePayment({order_id, payment_date, amount, payment_method, payment_no})
    if(errors.length > 0) return res.status(400).json({errors})

    try{
        // check if payment_no already exists
        const exists = await new Promise((resolve, reject) => {
            paymentModel.checkPaymentNoExists(payment_no, (err, exists) => {
                if(err) return reject(err)
                resolve(exists)
            })
        })

        if(exists){
            return res.status(400).json({error: 'Payment ID already exists'})

        }

        paymentModel.createPayment(order_id, payment_no, payment_date, amount, payment_method, (err, results) => {
            if(err) return res.status(500).json({error: err.message})
            res.status(200).json({message: 'Payment added successfully', payment_no})
        })
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

const getAllPayments = (req, res) => {

    // fetch data users from database
    paymentModel.getAllPayments((err, results) => {
        if(err) return res.status(500).json({error: err.message})
        res.status(200).json(results)
    })
}

const getPaymentById = (req, res) => {
    const {id} = req.params

    // fetch data user by id from database
    paymentModel.getPaymentById(id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'Payment not found'})
        res.status(200).json(results[0])
    })
}

const getPaymentByUserId = (req, res) => {
    const {user_id} = req.body

    // fetch data user by id from database
    paymentModel.getPaymentByUserId(user_id, (err, results) => {
        if(err) return res.status(500).json({error: err.message})
        if(results.length === 0) return res.status(404).json({error: 'User not found'})
        res.status(200).json(results[0])
    })
}

module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById,
    getPaymentByUserId,
}
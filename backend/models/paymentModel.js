const connection = require('../database/connection')

const createPayment = (order_id, payment_no, payment_date, amount, payment_method, callback) => {
    const query = 'INSERT INTO payments (order_id, payment_no, payment_date, amount, payment_method) VALUES (?,?,?,?,?)'
    connection.query(query, [order_id, payment_no, payment_date, amount, payment_method], callback)
}

const getAllPayments = (callback) => {
    const query = `
        SELECT payments.id, payments.payment_no, payments.order_id,payments.payment_date,
        payments.amount, payments.payment_method, payments.status,
        orders.user_id, orders.package_id, orders.order_date, orders.order_no, orders.status AS order_status
        FROM payments
        LEFT JOIN orders ON payments.order_id = orders.id`
    connection.query(query, callback)
}

const getPaymentById = (id, callback) => {
    const query = `
        SELECT payments.id, payments.payment_no, payments.order_id,payments.payment_date,
        payments.amount, payments.payment_method, payments.status,
        orders.user_id, orders.package_id, orders.order_date, orders.order_no, orders.status AS order_status
        FROM payments
        LEFT JOIN orders ON payments.order_id = orders.id
        WHERE payments.id = ?`
    connection.query(query, [id], callback)
}

const getPaymentByUserId = (user_id, callback) => {
    const query = `
        SELECT payments.id, payments.payment_no, payments.order_id,payments.payment_date,
        payments.amount, payments.payment_method, payments.status,
        orders.user_id, orders.package_id, orders.order_date, orders.order_no, orders.status AS order_status
        FROM payments
        LEFT JOIN orders ON payments.order_id = orders.id
        WHERE orders.user_id = ?`
    connection.query(query, [user_id], callback)
}

const checkPaymentNoExists = (payment_no, callback) => {
    const query = 'SELECT * FROM payments WHERE payment_no = ? LIMIT 1'
    connection.query(query, [payment_no], (err, results) => {
        if(err) return callback(err, null)
        callback(null, results > 0)
    })
}
module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById,
    getPaymentByUserId,
    checkPaymentNoExists,
}
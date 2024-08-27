const connection = require('../database/connection')

const createOrder = (user_id, package_id, order_date, order_no, callback) => {
    const query = 'INSERT INTO orders (user_id, package_id, order_date, order_no) VALUES (?,?,?,?)'
    connection.query(query, [user_id, package_id, order_date, order_no], callback)
}

const getAllOrders = (callback) => {
    const query = `
        SELECT orders.id, orders.user_id, orders.package_id, orders.order_date, orders.order_no, orders.status,
        users.email, users.phone, packages.package_name, packages.price
        FROM orders
        LEFT JOIN users ON orders.user_id = users.id
        LEFT JOIN packages ON orders.package_id = packages.id`
    connection.query(query, callback)
}

const getOrderById = (id, callback) => {
    const query = `
    SELECT orders.id, orders.user_id, orders.package_id, orders.order_date, orders.order_no, orders.status,
    users.email, users.phone, packages.package_name, packages.price
    FROM orders
    LEFT JOIN users ON orders.user_id = users.id
    LEFT JOIN packages ON orders.package_id = packages.id
    WHERE orders.id = ?`
    connection.query(query, [id], callback)
}

const getOrderByUserId = (user_id, callback) => {
    const query = `
    SELECT orders.id, orders.user_id, orders.package_id, orders.order_date, orders.order_no, orders.status,
    users.email, users.phone, packages.package_name, packages.price
    FROM orders
    LEFT JOIN users ON orders.user_id = users.id
    LEFT JOIN packages ON orders.package_id = packages.id
    WHERE orders.user_id = ?`
    connection.query(query, [user_id], callback)
}

const cancelOrder = (id, callback) => {
    // set status = 0 to canceled order by order id
    const query = 'UPDATE orders SET status = 0 WHERE id = ?'
    connection.query(query, [0, id], callback)
}

const checkOrderNoExists = (order_no, callback) => {
    const query = 'SELECT * FROM orders WHERE order_no = ? LIMIT 1'
    connection.query(query, [order_no], (err, results) => {
        if(err) return callback(err, null)
        callback(null, results > 0)
    })
}

const checkActivePackageExists = (user_id, callback) => {
    const query = 'SELECT * FROM orders WHERE status = 1 AND user_id = ? LIMIT 1'
    connection.query(query, [user_id], callback)
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrderByUserId,
    cancelOrder,
    checkOrderNoExists,
    checkActivePackageExists
}
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'arang123',
    database: 'chills'
})

connection.connect((err) => {
    if(err){
        console.error('Error connecting to MySQL: ' + err.stack)
        return
    }

    console.log('Connected to MYSQL')
})

module.exports = connection
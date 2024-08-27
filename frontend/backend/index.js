const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/apiRoutes')


const app = express()
const port = 5000

app.use(bodyParser.json())

// routes
app.use('/api', apiRoutes)
app.get('/', (req, res) => res.send('This API used for Chill App'))

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
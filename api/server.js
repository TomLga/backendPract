const express = require('express')
const errorHandler = require('./controllers/middleware/errorHandling')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000


app.use(express.json()) //  help pass the data from the server side 
app.use('/', require('./routes/userRoutes'));
app.use(errorHandler)

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})

/**
 * app.use is usualy middleware
 */
const express = require('express')
const dotenv = require('dotenv')


const app = express()
const connectDB = require('./dbconfig')

dotenv.config()
app.use(express.json())

//routes
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const globalRoutes = require('./routes/globalRoutes')


app.use('/user', userRoutes)
app.use('/admin', adminRoutes)
app.use('/', globalRoutes)



const port = process.env.PORT
app.listen(port, ()=> console.log(`Server Listening on port ${port}`))
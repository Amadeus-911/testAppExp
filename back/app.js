const express = require('express')
const dotenv = require('dotenv')


const app = express()


dotenv.config()
app.use(express.json())


app.get('/', (req, res)=> {
    res.status(200).send('req sending working!');
})



const port = process.env.PORT
app.listen(port, ()=> console.log(`Server Listening on port ${port}`))
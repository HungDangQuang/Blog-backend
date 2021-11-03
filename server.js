const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

var app = express()

var PORT = process.env.PORT || 3000

dotenv.config()

app.use(cors())

// Configure body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json)

app.listen(PORT, ()=>{
    console.log('Server is listening on  this port:', PORT )
})

mongoose.connect(process.env.DB_CONN, (err)=>{
    if(err){
        console.log('Connection failed with err ', err)
    }
    else {
        console.log('Connected to mongoDB')
    }
})

app.get('/', (req,res)=>{
    res.send("Hello, this is a blog website")
})
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

var app = express()


dotenv.config()
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is listening on this port' )
})
app.use(cors())

// Configure body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



mongoose.connect(process.env.DB_CONN,(err)=>{
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

require('./app/routes')(app)
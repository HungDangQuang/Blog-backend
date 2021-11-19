const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const auth = require('./app/middleware/isAuth')
var app = express()


dotenv.config()
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is listening on this port' )
})
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
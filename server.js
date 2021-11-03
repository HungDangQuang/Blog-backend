const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

var app = express()

var PORT = process.env.PORT || 3000

app.use(cors())

// Configure body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json)

app.listen(PORT, ()=>{
    console.log('Server is listening on  this port:', PORT )
})


app.get('/', (req,res)=>{
    res.send("Hello, this is a blog website")
})
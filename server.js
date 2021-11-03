var express = require('express')

var app = express()

var PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Server is listening on  this port:', PORT )
})

app.get('/', (req,res)=>{
    res.send("Hello, this is a blog website")
})
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
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

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Library API",
        version: "1.0.0",
        description: "Backend Library API",
      },
      servers: [
        {
          url: "https://youbo.herokuapp.com/",
        },
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: ["app/docs/swagger.docs.yml"],
  };
  
  const specs = swaggerJsDoc(options);
  
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


require('./app/routes')(app)
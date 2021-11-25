const {register,login, getAll,getOne,updateOne,deleteOne} = require('../controller/bloggerCtrl')
const isAuth = require('../middleware/isAuth')
const authorization = require('../middleware/authorization')
module.exports = function(app){
    app.post('/register', register)
    app.post('/login', login)
    app.get('/user',isAuth,authorization,getAll)
    app.get('/user/:id',getOne)
    app.patch('/user/:id',isAuth,authorization, updateOne)
    app.delete('/user/:id',isAuth,authorization,deleteOne)
}
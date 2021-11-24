const {createPost,getAll,getOne,updateOne,deleteOne} = require('../controller/postCtrl')
const authorization = require('../middleware/authorization')
const isAuth = require('../middleware/isAuth')
module.exports = function(app){
    app.post('/post',isAuth,authorization,createPost)
    app.get('/post',getAll)
    app.get('/post/:id', getOne)
    app.patch('/post/:id',isAuth,authorization,updateOne)
    app.delete('/post/:id',isAuth,authorization, deleteOne)
}
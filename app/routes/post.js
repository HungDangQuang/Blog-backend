const {createPost,getAll,getOne,updateOne,deleteOne} = require('../controller/postCtrl')
const isAuth = require('../middleware/isAuth')

module.exports = function(app){
    app.post('/post', isAuth ,createPost)
    app.get('/post',getAll)
    app.get('/post/:id', getOne)
    app.patch('/post/:id', updateOne)
    app.delete('/post/:id', deleteOne)
}
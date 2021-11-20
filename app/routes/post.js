const {createPost,getAll,getOne} = require('../controller/postCtrl')
const isAuth = require('../middleware/isAuth')

module.exports = function(app){
    app.post('/post', isAuth ,createPost)
    app.get('/post',getAll)
    app.get('/post/:id', getOne)
}
const {createPost,getAll} = require('../controller/postCtrl')
const isAuth = require('../middleware/isAuth')

module.exports = function(app){
    app.post('/posts', isAuth ,createPost)
    app.get('/posts',getAll)
}
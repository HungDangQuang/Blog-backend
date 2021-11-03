const {createPost} = require('../controller/postCtrl')

module.exports = function(app){
    app.post('/create-post', createPost)
}
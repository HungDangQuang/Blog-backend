const {createComment} = require('../controller/commentCtrl')

module.exports = function(app){
    app.post('/comment', createComment)
}
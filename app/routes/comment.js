const {createComment,getAll} = require('../controller/commentCtrl')

module.exports = function(app){
    app.post('/comment', createComment)
    app.get('/comment', getAll)
}
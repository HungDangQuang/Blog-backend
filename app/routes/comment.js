const {createComment,getAll, getOne, deleteOne} = require('../controller/commentCtrl')

module.exports = function(app){
    app.post('/comment', createComment)
    app.get('/comment', getAll)
    app.get('/comment/:id', getOne)
    app.delete('/comment/:id', deleteOne)
}
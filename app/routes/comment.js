const {createComment,getAll, getOne, deleteOne} = require('../controller/commentCtrl')
const authorization = require('../middleware/authorization')
const isAuth = require('../middleware/isAuth')
module.exports = function(app){
    app.post('/comment', createComment)
    app.get('/comment', getAll)
    app.get('/comment/:id', getOne)
    app.delete('/comment/:id',isAuth,authorization,deleteOne)
}
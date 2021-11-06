const {register,login} = require('../controller/bloggerCtrl')

module.exports = function(app){
    app.post('/register', register)
    app.post('/login', login)
    app.get('/test',function(req,res){
        res.send('hello')
    })
}
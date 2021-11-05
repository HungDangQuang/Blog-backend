const {register} = require('../controller/bloggerCtrl')

module.exports = function(app){
    app.post('/register', register)
}
module.exports = function(app){
    require('./routes/post')(app)
    require('./routes/blogger')(app)
    require('./routes/image')(app)
}
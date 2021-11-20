const { func } = require('joi')
const upload = require('../utils/upload')
const {uploadImage, getImage} = require('../controller/imageCtrl')

module.exports = function(app) {
    app.post('/file/upload', upload.single('file'), uploadImage)
    app.get('/file/:filename', getImage)
}
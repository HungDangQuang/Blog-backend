
const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    postID:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('comment',commentSchema)
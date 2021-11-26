
const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    postID:{
        type: String,
        required: true
    },
    date:{
        type: Date
    },
    comment:{
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('comment',commentSchema)
const { required } = require('joi')
const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({

    title: {
        type: String,
        unique: true,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    picture: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
    },

    createdDate: {
        type: Date
    },

},{timestamps: true})

module.exports = mongoose.model('post',PostSchema)

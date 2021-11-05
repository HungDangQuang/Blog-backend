const mongoose = require('mongoose')

const BloggerSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

})

module.exports = mongoose.model('blogger',BloggerSchema)
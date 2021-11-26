const mongoose = require('mongoose')

const BloggerSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
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

    role: {
        type: String,
        default: "user"
    }

})

module.exports = mongoose.model('user',BloggerSchema)
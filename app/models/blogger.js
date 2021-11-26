const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

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

}, {timestamps: true})

module.exports = mongoose.model('user',userSchema)
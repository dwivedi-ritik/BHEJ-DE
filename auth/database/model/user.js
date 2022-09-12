const mongoose = require("mongoose")

const { Schema } = mongoose

const user = Schema({
    username: {
        type: String,
        unique: true

    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

const User = mongoose.model('User', user)

module.exports = User
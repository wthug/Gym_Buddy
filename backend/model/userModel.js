const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSign = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User',userSign)

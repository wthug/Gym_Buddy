const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type:Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout',workoutSchema)

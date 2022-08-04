const mongoose = require('mongoose')

const {postSchema} = require('./Post.model')

const userSchema = mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        maxlength: 11
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts : [postSchema],
    
})

const User = new mongoose.model("User", userSchema)

module.exports = User
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title :{
        type: String,
        required: true
    },
    car :{
        brand :{
            type:String,
            required:true
        },
        model :{
            type:String,
            required:true
        },
        edition :{
            type:String,
            required:true
        },
        condition :{
            type:String,
            required:true
        },
        bodyType :{
            type:String,
            required:true
        },
        engineSize :{
            type:String,
            required:true
        },
        manufacturing_year :{
            type:String,
            required:true
        },
        transmission :{
            type:String,
            required:true
        },
        fuel :{
            type:String,
            required:true
        },
        kilometersRun :{
            type:String,
            required:true
        }
    },
    description:{
        type: String,
        required:true
    },
    price :{
        type: Number,
        required: true
    },
    isNegotiable:{
        type: Boolean,
        default: false
    },
    date :{
        type: Date,
        default: Date.now,
    }
})

const Post = new mongoose.model("Post", postSchema)

module.exports =  Post , postSchema
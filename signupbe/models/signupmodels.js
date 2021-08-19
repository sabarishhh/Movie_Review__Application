const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({

    fullName:{
        type:String,
        require:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable',signupTemplate)

const mongoose = require('mongoose')

const dataTemplate = new mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    },
    
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = moongoose.model('mytable',dataTemplate)

const mongoose = require('mongoose')

const schema = mongoose.Schema

const BookSchema = new schema({
    name:{
        type:String,
        required:true,
    },
    Age:{
        type:String,
        required:true
    },
    Place:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Data', BookSchema)
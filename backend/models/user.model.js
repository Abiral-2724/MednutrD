const mongoose = require('mongoose') ;

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true ,
    },
    lastname:{
        type:String,
        required:true ,
    },
    email:{
        type:String,
        required:true ,
    },
    password:{
        type:String,
        required:true ,
    },
    confirmPassword:{
        type:String,
        required:true ,
    },
    gender:{
        type:String,
        enum:['Male' ,'Female' ,'Prefer not to say'] ,
        required:true,
    },
    selectfield : {
        type:String,
        enum:['Patient' ,'Doctor'] ,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('User' ,userSchema) ;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name:{
        type: String,
        require:true,
    },
    userId:{
        type:String,
        require:true,
        unique : true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true //convert all emails to lower case for easy searching and comparison in database

    },
    userType:{
        type:String,
        default:'Customer',
        enum:['Admin', 'Customer'], // dollection of possible value of a field 
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("User", UserSchema);
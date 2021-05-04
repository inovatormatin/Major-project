const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:false
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
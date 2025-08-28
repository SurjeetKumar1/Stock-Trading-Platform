const {Schema}=require("mongoose");

const UserSchema=new Schema({
    Name:{
        type:"String",
        required:true,
    },
    Lastname:{
        type:"String",
        required:true,
    },
    Email:{
        type:"String",
        required:true,
    },
    Password:{
        type:"String",
        required:true,
    },
    // token:{
    //     type:String,
    //     default:""
    // }

})

module.exports={UserSchema};
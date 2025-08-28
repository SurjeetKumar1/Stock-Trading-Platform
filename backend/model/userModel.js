const { default: mongoose } = require("mongoose");

const {model}=mongoose

const {UserSchema}=require("../schemas/userSchema.js");

const User=new model("User",UserSchema);

module.exports={User};
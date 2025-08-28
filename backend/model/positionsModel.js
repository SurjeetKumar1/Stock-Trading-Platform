const { default: mongoose } = require("mongoose");

const {model}=mongoose

const {PositionsSchema}=require("../schemas/positionsSchema");

const PostionsModel=new model("Position",PositionsSchema);

module.exports={PostionsModel};
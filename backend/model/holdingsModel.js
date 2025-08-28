const { default: mongoose } = require("mongoose");

const {model}=mongoose

const {HoldingSchema}=require("../schemas/holdingsSchema");

const HoldingsModel=new model("Holding",HoldingSchema);

module.exports={HoldingsModel};
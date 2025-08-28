const mongoose  = require("mongoose");

const {OrderSchema}=require("../schemas/ordersSchema");

const OrderModel=mongoose.model("Order",OrderSchema);

module.exports={OrderModel};
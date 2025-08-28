require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const {HoldingsModel}=require("../model/holdingsModel.js");
const {PostionsModel}=require("../model/positionsModel.js")

const {watchlist,holdings,positions}=require("./data.js");

const PORT=process.env.PORT || 3004;
const DB_URL=process.env.MONGO_URL;

async function main(){
    await mongoose.connect(DB_URL)
}


main().then(()=>{
    console.log("Db connection is sucessfull");
}).catch(()=>{
    console.log("DB connection failed")
})


app.get("/addholdings",(req,res)=>{
    holdings.forEach((item)=>{
      let newHolding=new HoldingsModel(item)
      newHolding.save();
    })
    res.send("done");
})

app.get("/addpostionsdata",async(req,res)=>{
     try{
        let postionData= await PostionsModel.insertMany(positions);
        res.send("added",postionData);
     }catch(err){
        res.send("err",err);
     }
})


app.listen(PORT,()=>{
    console.log("server is listing",PORT);
})
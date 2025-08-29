require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const {HoldingsModel}=require("./model/holdingsModel.js");
const {PostionsModel}=require("./model/positionsModel.js")
const {OrderModel}=require("./model/ordersModel.js")
const cors = require('cors');
const bodyParser = require("body-parser");
const {User}=require("./model/userModel.js")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");

const SECRET_KEY="MeraNameSurjeetHai"

const PORT=process.env.PORT || 3002;
const DB_URL=process.env.MONGO_URL;
const cors = require("cors");
const app=express();
// app.use(cors());  //cors is s middleware
// app.use(cors({
//   origin: ["https://zerodha-snowy-three.vercel.app", "https://zerodha-kite-kappa.vercel.app"],
//   credentials: true
// }));
app.use(cors({
  origin: [
    "https://zerodha-snowy-three.vercel.app",
    "https://zerodha-kite-kappa.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Explicitly handle preflight
app.options("*", cors({
  origin: [
    "https://zerodha-snowy-three.vercel.app",
    "https://zerodha-kite-kappa.vercel.app"
  ],
  credentials: true
}));

app.use(bodyParser.json())
app.use(cookieParser());

async function main(){
    await mongoose.connect(DB_URL)
}

main().then(()=>{
    console.log("Db connection is sucessfull");
}).catch(()=>{
    console.log("DB connection failed")
})


app.get("/holdings",async(req,res)=>{
    let holdingData=await HoldingsModel.find();
    res.json(holdingData);
})


app.get("/positions",async(req,res)=>{
    let positionData=await PostionsModel.find();
    res.json(positionData);
})

// SIGNUP
app.post("/signup", async (req, res) => {
    const { name, lastName, email, password } = req.body;
    try {
      if (!name || !lastName || !email || !password) {
        return res.status(400).json({ Message: "Required All Fields!" });
      }
  
      let existingUser = await User.findOne({ Email: email });
      if (existingUser) {
        return res.status(400).json({ Message: "Email already exist!" });
      }
  
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({
        Name: name,
        Lastname: lastName,
        Email: email,
        Password: hashPassword,
      });
  
      const newUser = await user.save();
      res.status(201).json({ Message: "Signup successful", User: newUser });
    } catch (err) {
      console.log("Err during signup", err);
      res.status(500).json({ Message: "Error during signup", Error: err.message });
    }
  });
  
  
  // LOGIN
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(400).json({ Message: "All fields are required!" });
      }
  
      const user = await User.findOne({ Email: email });
      if (!user) {
        return res.status(404).json({ Message: "User Not Found" });
      }
  
      const isPasswordCorrect = await bcrypt.compare(password, user.Password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ Message: "Password is incorrect!" });
      }
  
      const token = jwt.sign(
        { email: email, userId: user._id },
        SECRET_KEY,
        { expiresIn: "7d" }
      );
  
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .cookie("username", user.Name, {
        httpOnly: false, 
        secure: true,    
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
  
      res.json({ Message: "Login successful", username:user.name});
    } catch (err) {
      console.log("Error during login", err);
      res.status(500).json({ Message: "Error during login", Error: err.message });
    }
  });
  
  
  // LOGOUT
  app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.clearCookie("username");
    res.json({ Message: "Logout successful" });
  });


  const authMiddleware = async (req, res, next) => {
    try {
      const token = req.cookies?.token; 
      if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
      }
  
      const decoded = jwt.verify(token, SECRET_KEY);
  
      const user = await User.findById(decoded.userId); 
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      req.user = {
          id: user._id,
          name: user.Name,
          lastname: user.Lastname,
          email: user.Email
      }
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
  

  app.get("/me", authMiddleware, (req, res) => {
    res.json(req.user);
  });
  


app.listen(PORT,()=>{
    console.log("server is listing");
})
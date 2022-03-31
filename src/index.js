const express=require("express");
require('dotenv').config();
const app=express();
const cors=require("cors");
const connectDB=require("./config/db")
const bodyParser=require("body-parser");
const signupController=require("./controller/signup.controller");
const loginController=require("./controller/login.controller");
const businessController=require("./controller/business.controller")
const dessignsController=require("./controller/dessign.controller")
const developmentController=require("./controller/development.controller")
const marketingController=require("./controller/marketing.controller")
const musicController=require("./controller/music.controller")
app.use(express.json());
app.use(bodyParser.json());
const PORT=process.env.PORT || 5000;
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:"http://127.0.0.1:5000"
}));
app.use("/business",businessController);
app.use("/designs",dessignsController);
app.use("/development",developmentController);
app.use("/marketing",marketingController);
app.use("/music",musicController);
app.use("/signup",signupController);
app.use("/login",loginController);
app.get("/udemy",(req,res)=>{
    res.set({
        "ALLow-access-ALLow-Origin":"*"
    })
    return res.redirect("index.html");
})

app.listen(PORT,async(req,res)=>{
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
    }
    console.log("Listening to ",PORT);
    
})
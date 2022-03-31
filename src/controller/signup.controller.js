const express=require("express");
const {body,validationResult}=require("express-validator")
require('dotenv').config();
var jwt = require('jsonwebtoken');
const newToken=(user)=>{
    return jwt.sign({user},process.env.SECRET_KEY);
}
const User=require("../models/use.model");
const router=express.Router();
router.post("",async(req,res)=>{
    try {
        let data=await User.findOne({email:req.body.email});
        if(data){
            return res.send("Existing Email. Please login");
        }
        data=await User.create(req.body);
        if(req.body.password==null){
            return res.send("Password can't be empty")
        }
        const token=newToken(data);
        console.log(token)
        return res.redirect("login.html");
    } catch (error) {
        console.log(error);
    }
});
module.exports=router;
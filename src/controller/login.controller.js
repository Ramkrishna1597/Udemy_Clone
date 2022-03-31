const express=require("express");
require('dotenv').config();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const newToken=(user)=>{
    return jwt.sign({user},process.env.SECRET_KEY);
}
const User=require("../models/use.model");
const router=express.Router();
router.post("",async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email});
        console.log(user);
        if(!user){
            return res.send("Invalid email or password")
        }
        const password=req.body.password;
        console.log(password)
        const match= await bcrypt.compare(password,user.password);
        console.log(match)
        if(match){
            const token=newToken(user);
            return res.redirect("home.html")
        }
        else{
            return res.send("Wrong Password")
        }
    } catch (error) {
        return res.send(error);
    }
});
module.exports=router;
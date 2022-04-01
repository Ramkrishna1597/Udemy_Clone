const express = require("express")

const router = express.Router()

const Rating = require("../models/rating.model")

router.get("",async(req,res)=>{
    try {
        const ratings = await Rating.find().lean().exec()
        return res.status(201).send({ratings:ratings})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router; 
const express = require("express")

const router = express.Router()

const Marketing = require("../models/marketing.model")

router.get("",async(req,res)=>{
    try {
        const marketings = await Marketing.find().lean().exec()
        return res.status(201).send({marketings:marketings})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router;
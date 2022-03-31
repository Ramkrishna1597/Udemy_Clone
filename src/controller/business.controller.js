const express = require("express")

const router = express.Router()

const Business = require("../models/business.model")

router.get("",async(req,res)=>{
    try {
        const bussiness = await Business.find().lean().exec()
        return res.status(201).send({bussiness:bussiness})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router;
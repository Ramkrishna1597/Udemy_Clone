const express = require("express")

const router = express.Router()

const Design = require("../models/design.model")

router.get("",async(req,res)=>{
    try {
        const designs = await Design.find().lean().exec()
        return res.status(201).send({designs:designs})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router; 
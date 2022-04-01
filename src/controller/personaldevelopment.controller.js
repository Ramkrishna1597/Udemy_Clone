const express = require("express")

const router = express.Router()

const PersonalDevelopment = require("../models/personaldevelopment.model")

router.get("",async(req,res)=>{
    try {
        const personaldevelopments = await PersonalDevelopment.find().lean().exec()
        return res.status(201).send({personaldevelopments:personaldevelopments})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router;
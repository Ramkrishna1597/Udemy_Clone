const express = require("express")

const router = express.Router()

const Development = require("../models/development.model")

router.get("",async(req,res)=>{
    try {
        const developments = await Development.find().lean().exec()
        return res.status(201).send({developments:developments})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router;
const express = require("express")

const router = express.Router()

const Search = require("../models/search.model")

router.get("/:courses",async(req,res)=>{
    try {
        const searchs = await Search.find({title:req.params.courses}).lean().exec()
        return res.status(201).send({searchs:searchs})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router; 
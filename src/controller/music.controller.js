const express = require("express")

const router = express.Router()

const Music = require("../models/music.model")

router.get("",async(req,res)=>{
    try {
        const musics = await Music.find().lean().exec()
        return res.status(201).send({musics:musics})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports=router;
import express from "express";
const router = new express.Router();
import { MensRanking } from "../models/mensrun.js";

router.get("/mensrace",async(req,res)=>{
    try{
        // const mensDetails = new MensRanking(req.body);
        const mens = await MensRanking.find().sort({"ranking":1});
        console.log(mens);
        res.status(200).send(mens);
    }catch(e){
        res.status(400).send(e);
    }
})


router.post("/mensrace",async(req,res)=>{
    try{
        const mensDetails = new MensRanking(req.body);
        const mens = await mensDetails.save();
        res.status(200).send(mensDetails);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/mensrace/:ranking",async(req,res)=>{
    try{
        const rank = req.params.ranking;
        // const mensDetails = new MensRanking(req.body);
        console.log(rank);
        const mens = await MensRanking.find({ranking:rank});
        res.status(200).send(mens);
    }catch(e){
        res.status(400).send(e);
    }
})


router.patch("/mensrace/:ranking",async(req,res)=>{
    try{
        const rank = req.params.ranking;
        // const mensDetails = new MensRanking(req.body);
        console.log(rank);
        const mens = await MensRanking.updateOne({ranking:rank},req.body,{new:true});
        res.status(200).send(mens);
    }catch(e){
        res.status(400).send(e);
    }
})


router.delete("/mensrace/:ranking",async(req,res)=>{
    try{
        const rank = req.params.ranking;
        // const mensDetails = new MensRanking(req.body);
        console.log(rank);
        const mens = await MensRanking.deleteOne({ranking:rank});
        res.status(200).send(mens);
    }catch(e){
        res.status(400).send(e);
    }
})

export {router};
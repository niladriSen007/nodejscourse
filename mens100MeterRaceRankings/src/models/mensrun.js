import express  from "express";
import mongoose from "mongoose";

const mensSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
    },
    event:{
        type:String,
        default:"100m"
    }
})


const MensRanking = new mongoose.model("MenRanking",mensSchema);

export {MensRanking};
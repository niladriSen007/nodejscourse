import mongoose from "mongoose";
import express from "express";
const app = express();
const conn =  mongoose.connect("mongodb://localhost:27017/niladridynamicweb")
.then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
});
export { conn };
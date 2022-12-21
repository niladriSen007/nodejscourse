const express = require("express");
const app=express();
const fs = require("fs");

// fs.writeFileSync("read.txt","Hi my name is Niladri Sen.");
// fs.appendFileSync("read.txt","I am a software engineer.");

fs.unlink("read.txt",(err)=>{
    console.log("deleted");
})



app.listen(3001,()=>{
    console.log("SERVER IS RUNNING");   
})

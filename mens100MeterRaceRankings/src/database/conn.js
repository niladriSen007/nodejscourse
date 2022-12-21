import mongoose from "mongoose";
const conn = mongoose.connect("mongodb://localhost:27017/olympics")
.then(()=>{
    console.log("Connection Successful.")
}).catch((err)=>{
    console.log("Connection is not successful.")
})

export {conn};
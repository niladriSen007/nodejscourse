import express from "express";
import { conn } from "./database/connection.js";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(port,()=>{
    console.log("Server is listening at port "+port);
})
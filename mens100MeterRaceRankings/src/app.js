import express  from "express";
import {conn} from "./database/conn.js"
import {MensRanking} from "./models/mensrun.js"
const app = express();
const port = process.env.PORT || 4000;
import {router } from "./routers/runner.js"



app.use(express.json());
app.use(router);




app.listen(port,()=>{
    console.log(`Connection ${port} Successful`)
})
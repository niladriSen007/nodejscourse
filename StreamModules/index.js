// import { response } from "express";
// import fs from "fs";
// import http from "http";
// const server = http.createServer((requets,response)=>{
//     console.log("Server created successfully!");
// })

// server.on("request",(req,res)=>{
//     const rStream = fs.createReadStream("input.txt");
//     rStream.on("data",(chunk)=>{
//         res.write(chunk);
//     });
//     rStream.on("end",()=>{
//         res.end();
//     });
//     rStream.on("error",(error)=>{
//         console.log(error);
//         res.end("File not found, Please check the name of the file");
//     })
// })

// server.listen(7000,"127.0.0.1");




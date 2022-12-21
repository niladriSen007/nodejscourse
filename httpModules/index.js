import express from "express";
import fs from "fs";
import path from 'path';
const __dirname = path.resolve();
import http from "http";
import chalk  from 'chalk';
const server = http.createServer((request,response)=>{


    const data=fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8");
    const objData = JSON.parse(data);
        
    

    if(request.url === "/")
    {
        response.end("Hi you are in the homepage");
    }
    else if(request.url === "/about")
    {
        response.end("You are in the about page")
    }
    else if(request.url === "/contacts")
    {
        response.end("You are in the contacts page");
    }
    else if(request.url === "/userapi")
    {
        response.writeHead(200,{"Content-type":"application/json"});
        response.end(objData[0].username);
       
    }
    else
    {
        response.writeHead(404,{"Content-type":"text/html"});
        response.end(`<h1>404 Page Not Found!!!</h1>`)
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log(chalk.grey.inverse("Server is running at 8000"));
})
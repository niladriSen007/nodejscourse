import http from "http";
import fs from "fs";
import requests from "requests";
// var requests = require('requests');
const homeFile = fs.readFileSync("home.html","utf-8");



const replaceVal = (tempVal,orgVal) =>{
    let temp = tempVal.replace("{%tempVal%}",(orgVal.main.temp-273.15).toFixed(2));
    temp=temp.replace("{%tempMin%}",(orgVal.main.temp_min-273.15).toFixed(2));
    temp=temp.replace("{%tempMax%}",(orgVal.main.temp_max-273.15).toFixed(2));
    temp=temp.replace("{%locationcity%}",orgVal.name);
    temp=temp.replace("{%country%}",orgVal.sys.country);
    temp = temp.replace("{%tempStatus%}",orgVal.weather[0].main);

    return temp;
}

const server= http.createServer((req,res)=>{
    
    if(req.url == "/")
    {
                    requests('https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=472512479adfe24ec2dc13153b7a1aa4')
            .on('data',  (chunk) =>{
                let objData=JSON.parse(chunk);
                let arrData = [objData];
                // console.log((arrData[0].main.temp)-273);
                const realTime = arrData.map((value)=> replaceVal(homeFile,value)).join("");
                res.write(realTime);
                // console.log(realTim
                
            })
            .on('end',  (err) => {
            if (err) return console.log('connection closed due to errors', err); 
            res.end();
});

    }
});

server.listen(8000,"127.0.0.1");
const os= require("os");
const express = require("express");
const app = express();
console.log(os.arch());
app.listen(3000);
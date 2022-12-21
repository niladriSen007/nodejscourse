import  express  from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import exphbs  from 'express-handlebars';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import hbs from "hbs";


const app = express();



// // Register `exphbs.engine` with the Express app without partials file.
// app.engine('hbs', exphbs.engine({extname: 'hbs', defaultLayout: false, layoutsDir: "views/layouts/"}));

//with partials folder
app.engine('hbs', exphbs.engine({
            extname: 'hbs',
            defaultLayout: false,
            layoutsDir: "views/layouts/",
            partialsDir  : [
                //  path to your partials
                path.join(__dirname, '../templates/partials'),
]}));
//to set the view engine 
app.set('view engine', '.hbs');
//giving the views path otherwise a error will occur of 'no such file in directory ../views/layout/main.hbs'
app.set('views', path.join(__dirname,"../templates/views"));



// const tempPath = path.join(__dirname,"../templates");
// const partialsPath = path.join(__dirname,"../templates/partials");



// hbs.registerPartials(partialsPath);




/* When you want to customize the name of the views directory */

// app.engine('hbs', exphbs.engine({extname: 'hbs', defaultLayout: false, layoutsDir: "templates/layouts/"}));
// app.set('view engine', '.hbs');
// const tempPath = path.join(__dirname,"../templates");
// app.set('views', tempPath);



// console.log(__dirname);
// app.use(express.static(staticPah));

// const staticPath = path.join(__dirname,"../public");



// app.use(express.static(staticPath));

//template engine er route ta likhte hobe

app.get("/",(req,res)=>{
    res.render('main',{
        name:"Rahul"
    });
})

app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/about/*",(req,res)=>{
    res.render('error404',{
        errorMsg:"Oops! this about us page could n't be found.😴"
    })
})

//except the specified links if you want to access any other page then it will show this error
app.get("*",(req,res)=>{
    res.render('error404',{
        errorMsg:"Oops! page not found😥"
    })
})

// app.get("/",(req,res)=>{
//     res.send("Welcome to Niladri's page");
// })

app.listen(7010,()=>{
    console.log("Server is listening at port 7010");
})
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-Mate");

app.engine('ejs',ejsMate);

app.use(express.static(path.join(__dirname,'public')))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/mamanest",(req,res)=>{
    res.render("mamanest/index");
})
app.get("/mamanest/features",(req,res)=>{
    res.render("mamanest/features");
})

app.listen(3500,()=>{
    console.log("Serving on port 3500");
})
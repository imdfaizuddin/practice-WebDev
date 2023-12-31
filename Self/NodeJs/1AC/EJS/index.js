const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("views", path.join(__dirname, "/views"));

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("home.ejs");
});
app.get("/rolldice", (req,res)=>{
    let diceVal = Math.floor((Math.random()*6))+1;
    res.render("rollDice.ejs", {diceVal});
});

app.get("/ig/:username", (req,res)=>{
    let instaData = require("./data.json");
    let { username } = req.params;
    let data = instaData[username];         //sends data only for :username
    // console.log(data);
    // const followers = ["Adam", "Bro", "cate", "Daniel"];
    // res.render("instagram.ejs", {username , followers});
    if(data){
    res.render("instagram.ejs", {data});
    }else{
        res.render("instaError.ejs");
    }
});
app.listen(port, ()=>{
    console.log("listning to port:",port);
});
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("views", path.join(__dirname, "/views"));

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("home.ejs");
});
app.get("/rolldice", (req,res)=>{
    let diceVal = Math.floor((Math.random()*6))+1;
    res.render("rollDice.ejs", {diceVal});
});
app.listen(port, ()=>{
    console.log("listning to port:",port);
});
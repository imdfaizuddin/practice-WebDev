const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username : "Adil",
        content : "I love coding"
    },

    {
        username : "Dua",
        content : "Hard work is important"
    },

    {
        username : "Kaif",
        content : "I am really cool"
    },
]
app.get("/posts", (req,res)=>{
    res.render("index.ejs", { posts });
});

app.get("/", (req, res)=>{
    res.send("welcome to root");
});

app.listen(port, ()=>{
    console.log("app is listning to port:", port);
});
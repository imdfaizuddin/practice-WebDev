const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

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

app.get("/posts/new",(req, res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req,res)=>{
    // console.log(req.body);
    // res.send("post req working");
    // posts.push(req.body);
    let {username , content} = req.body;
    posts.push({username, content});
    console.log(username);
    res.redirect("/posts");
});

app.get("/", (req, res)=>{
    res.send("welcome to root");
});

app.listen(port, ()=>{
    console.log("app is listning to port:", port);
});
const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
const { v4: uuidv4 } = require('uuid');


let posts = [
    {   
        id: uuidv4(),
        username : "Adil",
        content : "I love coding"
    },

    {   
        id: uuidv4(),
        username : "Dua",
        content : "Hard work is important"
    },

    {   
        id: uuidv4(),
        username : "Kaif",
        content : "I am really cool"
    },
]

// Showing all posts
app.get("/posts", (req,res)=>{
    res.render("index.ejs", { posts });
});

// Display add new post page
app.get("/posts/new",(req, res)=>{
    res.render("new.ejs");
});
// post req of new.ejs form
app.post("/posts", (req,res)=>{
    let id = uuidv4();
    let {username , content} = req.body;
    posts.push({username, content , id});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p)=> id === p.id);
    res.render("view.ejs", { post });
});
//edit get request
app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    // console.log(id);
    res.render("edit.ejs", {post});
});
// patch request
app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    // console.log(post);
    res.redirect("/posts");
});
app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id != p.id);
    res.redirect("/posts");
});
app.get("/", (req, res)=>{
    res.send("welcome to root");
});

app.listen(port, ()=>{
    console.log("app is listning to port:", port);
});
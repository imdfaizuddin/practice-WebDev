const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const path = require("path");
const Chat = require("./models/chat.js")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));  
app.use(express.json());

main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

//index route
app.get("/", async (req,res)=>{
    let chats = await Chat.find()
    // console.log(chats);
    res.render("index.ejs", {chats});
});
// new chat form
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
});

//post req for new chat
app.post("/chats", (req,res)=>{
    let {from , msg , to} = req.body;
    let chat = [
        {
            from : from,
            msg : msg,
            to : to,
            created_at : new Date(),
        }
    ];
    // console.log(req.body);
    // console.log(from, msg , to);
    Chat.insertMany(chat).then(res =>{
        console.log(res);
    }).catch(err=>{
        console.log("error is: ",err);
    });
    res.redirect("/");
});
app.listen(PORT, ()=>{
    console.log("server is listening to port: ", PORT);
});
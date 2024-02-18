const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main().then(() => {
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

//index route
app.get("/", (req, res) => {
    res.redirect("/chats");
});

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
});
// new chat form
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

//post req for new chat
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let chat = [
        {
            from: from,
            msg: msg,
            to: to,
            created_at: new Date(),
        }
    ];
    // console.log(req.body);
    // console.log(from, msg , to);
    Chat.insertMany(chat).then(res => {
        console.log("chat saved");
    }).catch(err => {
        console.log("error is: ", err);
    });
    res.redirect("/");
});
//edit chat form
app.get("/chats/:id/edit", (req, res) => {
    let { id } = req.params;

    Chat.find({ _id: id }).then(result => {
        // console.log(result);
        let chat = result[0];
        // console.log(chat);
        res.render("edit.ejs", { chat });
    }).catch(err => { console.log(err) });
    // res.send("working");
});
// chat update (PUT) route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    // console.log(id);
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg, updated_at: new Date() }, { new: true, runValidators: true });
    // console.log(updatedChat);
    res.redirect("/chats");
});

// DELETE route
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let delUser = await Chat.findOneAndDelete({_id: id});
    // console.log(delUser); //returns deleted document
    res.redirect("/chats");
});

app.listen(PORT, () => {
    console.log("server is listening to port: ", PORT);
});
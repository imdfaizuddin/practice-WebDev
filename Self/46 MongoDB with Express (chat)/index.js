const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const path = require("path");
const Chat = require("./models/chat.js")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

const chat1 = new Chat({
    from: "Neha",
    to: "Priya",
    msg: "Send class notes",
    created_at: new Date()
});

chat1.save().then(res =>{
    console.log(res);
}).catch(err => {console.log("Error is:", err)});

app.get("/", (req,res)=>{
    res.send("working");
});
app.listen(PORT, ()=>{
    console.log("server is listening to port: ", PORT);
});
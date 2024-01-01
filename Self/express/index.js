// const express = require ("express");
import express from "express";
const app = express();
let port = 3000;

app.listen(port , () => {
    console.log("app is listinig to : ", port);
});

// app.use((req, res) =>{
//     // console.log(req);
//     res.send("<h1> hello </h1");
// });


app.get("/", (req,res)=>{
    res.send("you contacted root path");
});

app.get("/contact", (req,res)=>{
    res.send("contact : tel- 9xxxxxxxxxx");
});

app.get("/searching", (req, res)=>{
    res.send("Serach page");
});


app.get("/student/:username/:id/:roll", (req, res)=>{           //http://localhost:3000/student/apna/123/21
    console.log(req.params);                                //console.log(req.params);={ username: 'apna', id: '123', roll: '21' }
    let { username , id , roll} = req.params;
    let htmlstr = `<h1>welcome to the page of @${username} id:${id} roll:${roll}</h1>`;
    res.send(htmlstr);
});

app.get("/search", (req,res)=>{
    console.log(req.query);
    let {q, color}= req.query;
    res.send(`searching for: ${q} and color ${color}`);
});

app.get("*", (req, res)=>{
    res.send("This path does not exist");
});
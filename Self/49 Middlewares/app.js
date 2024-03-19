const express = require("express");
const app = express();


// App.use is a middleware its always executed when request is sent to any path
app.use((req,res,next)=>{
    let {method, path, responseTime,hostname} = req;
    console.log("hi, i am middleware")
    console.log("time: ",new Date(Date.now()).toString())
    console.log(method, path,responseTime,hostname)
    next();  //If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. DOCS: Go to Express -> middlewares
})
//This is the next middleware function
app.use((req,res,next)=>{
    console.log("I am 2nd middleware");
    next();
})
app.get("/", (req,res)=>{
    res.send("root");
});

app.get("/random", (req,res)=>{
    res.send("Random Route");
});

app.listen(3000, ()=>{
    console.log("server is listning to port 3000");
})
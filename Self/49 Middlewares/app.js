const express = require("express");
const app = express();


//Middlewares are written in start of code because once response is sent middlewares are not accessed.
// App.use is a middleware its always executed when request is sent to any path, if no path defined it means "/" i.e execute for all paths.
app.use((req, res, next) => {
    // Destructuring req to use as utility middleware and log method, path,responseTime, hostname , query
    let { method, path, hostname, query } = req;
    console.log("hi, i am middleware")
    req.responseTime = new Date(Date.now()).toString()
    console.log(method, path, req.responseTime, hostname, query)
    next();  //If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. DOCS: Go to Express -> middlewares
    // console.log("This is after next");  // This is possible and will be executed but its not best practice. We can use 'return next()' to avoid this issue.
})
//This is the next middleware function
app.use((req, res, next) => {
    console.log("I am 2nd middleware");
    next();
})
//This middleware will work on "/random" path. DOCS : Express > application > app.use > path examples.
//Path defined middlewares can be used for authentication like only access "/api" if you're logged in else login.
app.use("/random", (req, res, next) => {
    console.log("i am middleware at /random path");
    next();
});

// ------------------------------------------------------------------------------------------------------------------------
app.use("/api", (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        res.send("ACCESS DENIED");
    }
})
app.get("/api", (req,res)=>{
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("root");
});

app.get("/random", (req, res) => {
    res.send("Random Route");
});

app.listen(3000, () => {
    console.log("server is listning to port 3000");
})
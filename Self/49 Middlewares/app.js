const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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
// give access to /api route 'data' if token in query string = giveaccess (/api?token=giveaccess)
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    } else {
        res.send("ACCESS DENIED");
    }
})
app.get("/api", (req, res) => {
    res.send("data");
});
// ------------------------------------------------------------------------------------------------------------------------
//passing middleware as function similar to above code
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!"); // using custom error class ExpressError. sending status and message values to ExpressError class's constructor.
}

app.get("/api2/check", checkToken, (req, res) => {
    res.send("data")
});
// ------------------------------------------------------------------------------------------------------------------------
//-------------------ERROR Handling----------------------------------------------
app.get("/xyz", (req, res) => {
    xyz === xyz;
});
app.get("/admin", (req,res)=>{
    throw new ExpressError(403, "Access to admin denied") // sending status and message values to ExpressError class's constructor.
})
//Error handling middleware are in the end
app.use((err, req, res, next) => {
    console.log("---------ERROR--------")
    // next(); // this next will search for next non-error handling middleware.
    // next(err); //to trigger error handling middlewares.
    let {status = 500, message = "some Error Occurred"} = err;    //extracting status and message from error & giving them default values.
    res.status(status).send(message);
})
// ------------------------------------------------------------------------------------------------------------------------
app.get("/", (req, res) => {
    res.send("root");
});

app.get("/random", (req, res) => {
    res.send("Random Route");
});

app.listen(3000, () => {
    console.log("server is listning to port 3000");
})
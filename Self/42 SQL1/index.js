const { faker, da } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
//for handling post req
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'instagram',
    password: "2022"
  });
  // query for selecting all(*) fields from table student where marks is 70 using placeholders 
//   let q = `SELECT *
//   FROM student
//   WHERE marks >= ?
//   `
//   let user = [70];
//   // query for creating table in SQL database
// let createTable = `CREATE TABLE user(
//     id VARCHAR(50) PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(50) NOT NULL
//     )`;
// // adding 100 users in user table using faker
const getUser = ()=> {
        return [
          faker.string.uuid(),
          faker.internet.userName(),
          faker.internet.email(),
          faker.internet.password(),
        ];
 }
// query for adding 100 values using placeholder ? and 2d array [data]
// let inputVal = `INSERT INTO user (id ,username, email, password) VALUES ?`;
  
//     let data = [];
//     for(let i=0; i<100; i++){
//       data.push(getUser());
//     }
//     console.log(data);
  
//   connection.query(inputVal, [data], (err, result)=>{
//     try {
//         if(err) throw err;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//   });

//   connection.end();

  // let data = [];
  // data.push(getRandomUser());
  // console.log(data);

// get reqest on "root" route 
app.get("/", (req,res)=>{
  connection.query("SELECT COUNT(id) FROM user", (err,result)=>{
    try {
      if(err) throw err;
      // console.log(result[0]["COUNT(id)"]);
      let count = result[0]["COUNT(id)"];
      res.render("index.ejs", {count});
    } catch (e) {
      console.log("error detected: ",e);
    }
  });
});

app.get("/user", (req,res)=>{
try{
  connection.query("SELECT * FROM user", (err,result)=>{
    if(err) throw err;
    // console.log(result);
    res.render("user.ejs", {result});
  });
}catch(e){
  console.log("error", e);
}
});

app.get("/user/:id/edit", (req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id ="${id}"`;
  connection.query(q, (err,result)=>{
    if(err) throw error;
    let user = result[0];
    res.render("edit.ejs", {user});

  });
});

app.post("/user/:id", (req,res)=>{
  let {id} = req.params;
  let {newUsername, password} = req.body;
  let q = `SELECT * FROM user WHERE id= '${id}'`;
  try{
    connection.query(q, (err,result)=>{
      if(err) throw err;
      // console.log(result);
      let pwd = result[0].password;
      // console.log(pwd);
      if( pwd=== password){
        // console.log("matched");
        let q = `UPDATE user SET username = "${newUsername}" WHERE id = "${id}"`;
        connection.query(q,(err,result)=>{
          try {
          if(err) throw error;
            
          } catch (error) {
            console.log("error",error);
          }  
          // res.send("username changed");
          res.redirect("/user");
        });
      }else{
        res.send("password not matched");
      }
    });
  }catch(e){
    console.log("error", e);
  }
});

// adding new user
app.get("/add", (req,res)=>{
  let user = getUser();
  // console.log(user);
  res.render("add.ejs", {user});
});

app.post("/add", (req,res)=>{
  let {id , username , email , password} = req.body;
  let user = [id, username, email, password ];
  let user2 = [[id, username, email, password ]];
  let q = `INSERT INTO user (id ,username, email, password) VALUES (?,?,?,?)` // for 
  let q2 = `INSERT INTO user (id ,username, email, password) VALUES ?`
  connection.query(q2, [user2], (err,result)=>{
    try {
      if(err) throw err;
      // console.log(result);
      res.redirect("/");
    } catch (e) {
      console.log("error: ", e)
    }
  });
}); 
app.listen("8080", ()=>{
  console.log("server is listening to port 8080");
});
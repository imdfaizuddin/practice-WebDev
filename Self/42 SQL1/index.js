const { faker, da } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
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
// let getUser = ()=> {
//         return [
//           faker.string.uuid(),
//           faker.internet.userName(),
//           faker.internet.email(),
//           faker.internet.password(),
//         ];
//  }
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

app.listen("8080", ()=>{
  console.log("server is listening to port 8080");
});
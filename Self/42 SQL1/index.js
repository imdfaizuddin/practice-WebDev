const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'instagram',
    password: "2022"
  });

  connection.query("SHOW TABLES", (err, result)=>{
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
  });


let getRandomUser = ()=> {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

//   console.log(getRandomUser());
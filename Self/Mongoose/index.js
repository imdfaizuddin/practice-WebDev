const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(res => {
  console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("user", userSchema);
// const Emp = mongoose.model("employees", userSchema);
// const user1 = new User({name: "Adil", email: "adil@gmail.com", age: 21});  //user1 obj or document

// user1.save();  //to save in db & returns a promise

const user2 = new User({name: "Eve", email: "eve@gamil.com", age: 22});
user2.save().then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
});
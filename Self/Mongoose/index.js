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

const User = mongoose.model("User", userSchema);
// const Emp = mongoose.model("employees", userSchema);
// const user1 = new User({name: "Adil", email: "adil@gmail.com", age: 21});  //user1 obj or document

// user1.save();  //to save in db & returns a promise

// const user2 = new User({name: "Eve", email: "eve@gamil.com", age: 22});
// user2.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// User.insertMany([
//   {name:"Tony", email: "tony@gmail.com", age: 55},
//   {name: "Bruce", email: "bruce@gmail.com", age: 47},
//   {name: "Peter", email: "peter@gmail.com", age: 30},
// ]).then((res)=>{
//   console.log(res);
// }).catch((err)=>{ console.log(err)});

// User.findOne({age: {$gt: 40}}).then(res => {
//   console.log(res);
//   // console.log(res[0]);
// }).catch(err => {
//   console.log(err);
// });

// User.findById("65ba6f188827f1cc17b6a5ea").then(res=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// });

// User.updateOne({name: "Bruce"}, {age: 49}).then((res)=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// });

// User.updateMany({age: {$gt: 48}}, {age: 51}).then((res)=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// });

// User.findOneAndUpdate({name: "Bruce"},{age: 42},{new: true}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log("Error is : ", err);
// });

// User.findByIdAndUpdate("65ba6f188827f1cc17b6a5e9",{age: 41},{new: true}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log("Error is : ", err);
// });

// User.deleteOne({name: "Bruce"}).then(res =>{
//   console.log(res)
// })

User.deleteMany({age: 51}).then(res=>{
  console.log(res)
})
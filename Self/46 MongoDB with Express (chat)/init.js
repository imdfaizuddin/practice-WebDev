const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


let allChats = [
    {
        from: "Rahul",
        to: "Amit",
        msg: "Meeting at 2 PM",
        created_at: new Date()
    },
    {
        from: "Emma",
        to: "John",
        msg: "Reminder: Pay rent",
        created_at: new Date()
    },
    {
        from: "Sara",
        to: "Michael",
        msg: "Don't forget to bring the presentation slides",
        created_at: new Date()
    },
    {
        from: "David",
        to: "Sophia",
        msg: "Happy Birthday!",
        created_at: new Date()
    },
    {
        from: "Alex",
        to: "Emily",
        msg: "Are we still on for dinner tonight?",
        created_at: new Date()
    },
    {
        from: "Sanjay",
        to: "Ravi",
        msg: "Reminder: Submit project report by EOD",
        created_at: new Date()
    },
    {
        from: "Priyanka",
        to: "Aman",
        msg: "Call me when you get a chance",
        created_at: new Date()
    },
    {
        from: "Chris",
        to: "Megan",
        msg: "Meeting postponed to tomorrow",
        created_at: new Date()
    },
    {
        from: "Nisha",
        to: "Karan",
        msg: "Did you receive the email I sent yesterday?",
        created_at: new Date()
    },
    {
        from: "Anjali",
        to: "Rohan",
        msg: "Reminder: Bring the project proposal document",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);

// chat1.save().then(res =>{
//     console.log(res);
// }).catch(err => {console.log("Error is:", err)});
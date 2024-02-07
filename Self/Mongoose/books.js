const mongoose = require('mongoose');

main().then(res=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/flipkart');
}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
    },
    price:{
        type: Number,
        min : [1 , "Please enter valid price"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    genre: [String],

    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
});

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     title: "  Wit   ",
//     author:" MacHale",
//     price : 1099,
//     discount: 20,
//     genre: ["comedy", "Non-fiction", "Humor"],
//     category: "non-fiction",
// });

// book1.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log("error is :- ",err);
// });
Book.findByIdAndUpdate("65c3a4f36cc76714783deddc", {discount: 20},{runValidators: true}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log("error is: ", err);
});
const { appendFile } = require('fs');
const mongoose =require('mongoose');

const userSchema= new mongoose.Schema({
    category:String,
    food:String,
    price:Number,
    item:String

});

module.exports = mongoose.model("User", userSchema); 


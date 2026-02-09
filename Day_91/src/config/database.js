const express = require('mongoose');

function connectToDb(){
    mongoose.connect("mongodb+srv://Deepesh:39A7TcpA1uZtDS7t@cluster0.nppfkrr.mongodb.net/Day_91")
    .then(()=>{
        console.log("Connected to DB"); 
    })
}

module.exports = connectToDb();
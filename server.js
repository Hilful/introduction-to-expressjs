const express = require('express');
const app = express();


app.get('/' , (req , res)=>{
    // res.send("Hello,This is my first time printing Hello from my express server!!!");
    res.send("<h1>Hello, World!!!</h1>");
})


app.get('/contact' , (req , res)=>{
        res.send("Contact Me At: hilful25@gmail.com"); 
})
app.get('/about' , (req , res)=>{
        res.send("Hi, I am Ashabul Elaph Hilful.I am a very passionate web application developer who is currently chasing his dream"); 
})

app.listen(3000 , ()=>{
    console.log("Server Started on port : 3000");
} ) 



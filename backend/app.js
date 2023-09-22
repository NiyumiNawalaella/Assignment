const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 8000;

//calling db.js file the database connection
require('dotenv').config();
require('./db');

//server connection
app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000']; //add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if(!origin || allowedOrigins.includes(origin)) {
                callback(null,true);                
            }else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, //Allow credentials
    })
);
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({message: 'The API is working'});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//connecting to localhost Port which is 5000 and database
// mongoose.connect(
//     `mongodb+srv://admin:${process.env.MongoDB_Password}@cluster0.8p3wseq.mongodb.net/?retryWrites=true&w=majority`
// ).then(() => app.listen(PORT, () => {
//     console.log(`Connected To Database and Server`)
// })). catch((e) => console.log(e));

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// import userRouter from "./routes/user-routes";

// dotenv.config();
// const app = express();

// //middlewares
// app.use("/user", userRouter);




// app.use("/",(req,res,next) => {
//     res.send("Hi");
// });



//admin mongodb passwrod: MiJcx8pJj8N3fcvU
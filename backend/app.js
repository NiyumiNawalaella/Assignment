import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

//connecting to localhost Port which is 5000 and database
mongoose.connect(
    `mongodb+srv://admin:${process.env.MongoDB_Password}@cluster0.8p3wseq.mongodb.net/?retryWrites=true&w=majority`
).then(() => app.listen(5000, () => 
    console.log(`Connected To Database and Server`))
). catch((e) => console.log(e));


// app.use("/",(req,res,next) => {
//     res.send("Hi");
// });



//admin mongodb passwrod: MiJcx8pJj8N3fcvU
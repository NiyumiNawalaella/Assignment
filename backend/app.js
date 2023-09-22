import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb+srv://admin:<password>@cluster0.8p3wseq.mongodb.net/?retryWrites=true&w=majority");
// app.use("/",(req,res,next) => {
//     res.send("Hi");
// });

//connecting to localhost Port which is 5000
app.listen(5000, () => {
    console.log(`Connected To Localhost Port ${5000}`);
});

//MiJcx8pJj8N3fcvU
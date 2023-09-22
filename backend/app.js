import express from "express";

const app = express();

// app.use("/",(req,res,next) => {
//     res.send("Hi");
// });

//connecting to localhost Port which is 5000
app.listen(5000, () => {
    console.log(`Connected To Localhost Port ${5000}`);
});
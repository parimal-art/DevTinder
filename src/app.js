const express = require("express");
const app = express();

app.use("/user",[
    (req, res, next) => {
        console.log("this is the 1st handle request");
        next();
        // res.send("Home route 1 ")
    },
    (req, res, next) => {
        console.log("this is the 2nd handle request");
        next();
        // res.send("Home route 2 ")
    }],
    (req, res, next) => {
        console.log("this is the 3Rd handle request");
        next();
        // res.send("Home route 3 ")
    },
    (req, res, next) => {
        console.log("this is the 4TH handle request");
        next();
        res.send("request handled")
    }

)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



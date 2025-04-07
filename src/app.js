const express = require("express");

const app = express();

app.use("/test",(req, res)=>{
    res.send("Hello from server side!!")
})

app.use("/hello",(req, res)=>{
    res.send("Hello Hello Hello hello!!")
})

app.listen(3000, ()=>{
    console.log("the port is listening in port 3000");
    
});
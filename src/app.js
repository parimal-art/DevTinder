const express = require("express");
const app = express();
const {AdminAuth, userAuth}= require("./middleware/auth")

//Handle Auth Middleware for all request Get, Push, Delete......etc
app.use("/admin", AdminAuth)

app.get("/user", userAuth,(req,res)=>{
    res.send("User is authenticated in the backend")
})

app.get("/admin/getAllData",(req,res)=>{
    res.send("Data is successfully send to the Admin!!")
})
app.get("/admin/deleteUser",(req,res)=>{
    res.send("User is been deleted sucessfully!!")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



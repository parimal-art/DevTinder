const express = require("express");
const app = express();
const connectDB=require("./config/database")
const User = require("./models/user")

app.use(express.json());

app.post("/signUp",async(req, res)=>{
    console.log(req.body);
   // creating the new instance of the user model
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User added Successfully....")
    } catch(err){
        res.status(400).send("Error while saving data"+err.message);
    }
})

connectDB()
.then(()=>{
    console.log("Database connection is Successfull......");
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
.catch((err)=>{
    console.error("Database does not connected......")
})




const express = require("express");

const app = express();

app.use("/user",(req, res)=>{
    res.send("use handle all the request and remember order matters!!")
})

app.get("/user",(req, res)=>{
    res.send({firstName:"Parimal", lastName:"Maity"})
})
app.post("/user",(req, res)=>{
    res.send("Data is successfilly posted")
})
app.delete("/user",(req, res)=>{
    res.send("Data is successfilly Deleted")
})
app.use("/test",(req, res)=>{
    res.send("This is an testing API call")
})

app.listen(3000, ()=>{
    console.log("the port is listening in port 3000");
    
});
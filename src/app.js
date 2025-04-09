const express = require("express");
const app = express();

app.get("/getUserData", (req,res)=>{

    try{
        throw new Error("fgfyufnsdv");
        res.send("User is authenticated in the backend")
    }
    catch(err){
        res.status(500).send("This is the best approach to handle the request")
    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



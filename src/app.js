const express = require("express");
const app = express();

// ✅ This RegExp matches both /ac and /abc
app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    res.send("This is an param call using multiple param");
});

app.get("/", (req, res) => {
    res.send("Home route");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



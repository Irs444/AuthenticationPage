const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const port = 5000

const connection = require("./connection")

app.use(bodyParser.json())

app.get("/", (req, res) => {
    
    res.send("hello")
})

app.post("/post", (req, res) => {
    console.log(req.body);
    res.send("post method")
})

app.listen(port, (() => {
    console.log("server started at", port);
    
}))

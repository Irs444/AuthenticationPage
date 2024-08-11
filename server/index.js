const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const port = 5000

const connection = require("./connection")

const UserRouter = require("./routers/userRouter")

app.use(bodyParser.json())

app.use("/user", UserRouter)






app.listen(port, (() => {
    console.log("server started at", port);
    
}))

const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const port = 5000


const connection = require("./connection")

const UserRouter = require("./routers/userRouter")
const ProductRouter = require("./routers/productRouter")
const UtilRouter = require("./routers/util")


app.use(bodyParser.json())
app.use(express.json())




app.use("/user", UserRouter)
app.use("/product" , ProductRouter)
app.use("/util", UtilRouter)


// app.use(express.static('./static/uploads'));


app.listen(port, (() => {
    console.log("server started at", port);
    
}))

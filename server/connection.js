const mongoose = require("mongoose")

const url = ("mongodb+srv://irs786had123:irshad@cluster0.82yikc9.mongodb.net/Auth?retryWrites=true&w=majority&appName=Cluster0")

mongoose.connect(url)
.then((result) => {
    console.log("server connected");
    
}).catch((err) => {
    console.log("err");
    
})

module.exports = mongoose
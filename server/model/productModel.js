const {Schema , model} = require("../connection")

const ProductSchema = new Schema({
    name:{type: String},
    category: { type: String},
    image: {type: String}
})


module.exports = model("product", ProductSchema)
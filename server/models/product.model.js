const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title cannot be left blank."],
        minLength:[2, "Title must be at least 2 characters."]
    },
    price:{
        type:Number,
        required:[true, "Please enter a price for this product."]
    },
    description:{
        type:String,
        required:[true, "Please enter a description for this product."],
        minLength:[20, "Description minimum 15 characters."]
    }
}, {timestamps:true});

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;
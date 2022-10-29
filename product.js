const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
        name: String ,
        brand: String,
        price:Number,
        Category: String    
})

module.exports=mongoose.model('products',ProductSchema)


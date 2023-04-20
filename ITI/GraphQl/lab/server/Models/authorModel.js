const mongoose = require("mongoose");

let authorSchema = new mongoose.Schema({
    name:String,
    age:Number,
    books:[{type:String}]
})

module.exports = mongoose.model("authors",authorSchema)
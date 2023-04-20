const mongoose = require("mongoose");

let BookSchema = new mongoose.Schema({
    name:String,
    author:String,
    NumOfPages:String

})

module.exports = mongoose.model("books",BookSchema)

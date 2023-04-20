const mongoose = require("mongoose");

let StudentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    courses:[{type:String}]
})

module.exports = mongoose.model("students",StudentSchema)
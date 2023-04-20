const mongoose = require("mongoose");

let CourseSchema = new mongoose.Schema({
    name:String,
    duration:String
})

module.exports = mongoose.model("courses",CourseSchema)

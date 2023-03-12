//DB_URL
let mongoose = require("mongoose");
let DB_URL = "mongodb://localhost:27017/Users";
const valid = require("validator");
mongoose.connect(DB_URL,{useNewUrlParser:true});

//Schema
var UsersSchema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        validate:{
            // validator:(val)=>{return ("^[]+$").test(val)}
            validator:(val)=>{return valid.isEmail(val)}
            ,message:"Email Not Valid !!!!!!!!"
        }
    },
    password:{type:String,minlength:5}
})

module.exports = mongoose.model("auths",UsersSchema);


/**
 //var UModel =  require("");
 * var u1 = new UModel({name, email, password});
 * u1.save();
 * UModel.find({})
 * UModel.find({email:u1.email})
 */
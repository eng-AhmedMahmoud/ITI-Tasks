/**
 * express
 * ejs
 * mongoose [npm i mongoose]
 *  1- connect(DB_URL)
 *  2- Create Schema
 *  3- Create Model ==> Schema & DB ==> Create New obj & Find & find & ....
 *  4- listner [mongoose.connection.once("open",()=>{code})]
 *  4- listner [mongoose.connection.on("error",()=>{})]
 */

//#region Config
const express = require("express");
const app = express();
var PORT = process.env.PORT || 7004;
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//#endregion

//#region MiddleWares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//#endregion


//#region Mongoose Config
const DB_URL = "mongodb://localhost:27017/Bank";//mongodb://127.0.0.1:27017/Bank
mongoose.connect(DB_URL, {useNewUrlParser:true});
var BankSchema = mongoose.Schema;
var CreditCardCustomersSchema = new BankSchema({
    CLIENTNUM: Number,
    Customer_Age: Number,
    Gender: String,
    Education_Level: String,
    Marital_Status: String,
    Income_Category: String,
    Card_Category: String,
    Credit_Limit: Number
})

//[Model] ==> Find,...
var CreditCardCustomersModel = mongoose.model("creditcardcustomers",CreditCardCustomersSchema)

//listener
var db = mongoose.connection;
db.on("error",()=>{console.log("7asal Error")})
db.once("open",()=>{
    console.log("Connected");
    app.get("/customers",async (req,res)=>{
        var AllCustomers = await CreditCardCustomersModel.find({});
        res.render("mongoview.ejs", {AllCustomers})
        // res.json(AllCustomers);
    })
    app.get("/add",(req, res)=>{
        res.render("addCustomer.ejs")
    })
    app.post("/add",async(req, res)=>{
        //1-Create new Obj From Model ==> var c = new CCCM({}); c.save() 
       // var c = new CreditCardCustomersModel(req.body);//{CLIENTNUM:123132}
       await CreditCardCustomersModel.insertMany(req.body)
        // await CreditCardCustomersModel.create(req.body)
        //await c.save();
        res.redirect("/customers");
    })
})

//#endregion

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)});

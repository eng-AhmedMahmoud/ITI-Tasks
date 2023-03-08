/**
 * express
 * ejs
 * path
 * port
 */

//#region Config
const express = require("express");
const app = express();
var PORT = process.env.PORT || 7004;
const path = require("path");
const bodyParser = require("body-parser");
//#endregion

//#region MiddleWares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")))
// app.use(express.static(path.join(__dirname, "/assets")))
// app.use("/assets",express.static(path.join(__dirname, "/public")))
//#endregion

//#region Data
var userName = "Ahmed";
var user = {name:"Aly", age:20}
var users = [
    {name:"Aly", age:20},
    {name:"Sara", age:22},
    {name:"Ahmed", age:25}
]
//#endregion

//#region End-Points
app.get("/",(req, res)=>{
    res.render("home.ejs",{uname:userName, user, users});
})
app.get("/profile/:userName",(req, res)=>{
    var userName = req.params.userName;
    res.render("profile.ejs",{userName})
})
app.get("/add",(req, res)=>{
    res.render("add.ejs");
})

app.post("/add",(req, res)=>{
    // var newUser = req.body;//{userName}
    var {userName} = req.body;//{userName}
    // console.log(newUser);
    // res.render("profile.ejs",{userName:newUser.userName});
    // res.render("profile.ejs",{userName});
    res.redirect("/profile/"+userName);
})

app.post("/profile.ejs",(req, res)=>{
    // var newUser = req.body;//{userName}
    var {userName} = req.body;//{userName}
    // console.log(newUser);
    // res.render("profile.ejs",{userName:newUser.userName});
    res.render("profile.ejs",{userName});
    // res.redirect("/profile/"+userName);
})

//#endregion

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)});





// let alaa = (req,res)=>{

// }
// app.get("/",alaa)
// app.get("/main.html",alaa)
// app.post("/",()=>{})
// app.delete("/",()=>{})
// app.put("/",()=>{})
// app.patch("/",()=>{})
// app.router("/")
// .get(()=>{})
// .post(()=>{})
// .put(()=>{})
// .delete(()=>{})

//#region 
// var mm = require("../Modules/myModule");
// console.log(mm);//{myModule: f(){}}
// mm.myModule();


/**

Major.Minor.patch

*[Major.Minor.patch]
^Major.[Minor.patch]
~Major.Minor.[patch]


[4.18.2] ==> [4.18.5] ==> [4.20.1] ==> [5.3.1]

*/
/**
 * express [ npm i express ]
 */
//#endregion

//#region express

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
let PORT = process.env.PORT || 7003;
//#region  MiddleWare
app.use(bodyParser.urlencoded({extended:true}));//Forms
app.use(bodyParser.json());//Json Obj
app.get("*",(req,res,next)=>{
    console.log("Hii At MiddleWare");
    // res.send("Middlware");
    next();
})
app.get("/users",(req,res,hamada)=>{
    console.log("Users Logging");
    hamada();
})

//#endregion

//#region End-Points [Rest API]
    app.get("/",(req, res)=>{
        res.send("Hello World")
    })
    var newID = 0;
    app.get("/users/:id",
                (req,res,next)=>{
                    // console.log(req.params.id);
                    newID = +req.params.id;
                    console.log("UserDetails 1 MiddleWare")
                    next();
                }
                ,(req,res,next)=>{
                    // console.log(req.params.id);
                    newID = +(req.params.id)+10;
                    console.log("UserDetails 2 MiddleWare")
                    next();
                }
                ,(req, res)=>{
                    // console.log(req.params);//{id:"5", name:"ahmed", age:"20"}
                    console.log(newID);
                  var ID = req.params.id;
                  res.send("Welcome ya ID: "+newID)
                });

    app.get("/users",(req, res)=>{
        // console.log(req.query);//{propName:""}
        res.send("Users Works")
    })
    app.get("/main.html",(req, res)=>{
        res.sendFile(path.join(__dirname, "../Client/main.html"))
    })
    app.post("/profile.html",(req, res)=>{
        console.log(req.body);
        res.sendFile(path.join(__dirname, "../Client/profile.html"))
    })
    app.all("*",(req,res)=>{
        console.log("Default Page");
        res.send("<h1>Error Page</h1>")
    })
//#endregion

// console.log(path.join(__dirname, "../Client/main.html"));

// console.log(process.env.PORT);//undefined

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)})
//#endregion





/**
 * app.get("url",MW,(req,res)=>{})
 */
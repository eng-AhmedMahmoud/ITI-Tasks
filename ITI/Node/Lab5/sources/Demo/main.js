//#region Config
const express = require("express");
const app = express();//createServer()
const bodyparser = require("body-parser");
const path = require("path");
const StudentsRoutes = require("./Routes/StudentsRoutes");
const CoursesRoutes = require("./Routes/CoursesRoutes");
const logging = require("./MiddelWares/Logging");
const UsersRoutes = require("./Routes/UsersRoutes");
let PORT = process.env.PORT || 7005;
//#endregion

//#region MiddleWares
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(logging);
//#endregion

app.use("/api/students",StudentsRoutes);
app.use("/api/courses",CoursesRoutes);
//Authentication[reg - login]
app.use("/api/users",UsersRoutes);

//Autherization

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)});



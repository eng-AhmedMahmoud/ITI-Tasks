const http = require("http");
const fs = require("fs");

var mainHtml = fs.readFileSync("../ClientSide/main.html").toString();
var profileHtml = fs.readFileSync("../ClientSide/profile.html").toString();
var styleCSS = fs.readFileSync("../ClientSide/style.css").toString();
var scriptJS = fs.readFileSync("../ClientSide/script.js").toString();
var image = fs.readFileSync("../ClientSide/2.jpg");
var favIcon = fs.readFileSync("../ClientSide/favicon.ico");
let userName = "";


// http.createServer().listen("7002",()=>{console.log("Listining On PORT 7002")})
http.createServer((req, res)=>{
    //Cases url ==> ?? [req.url]
    // console.log(req.url);
    // res.write(mainHtml)
    //#region GET
    if(req.method == "GET"){
        switch(req.url){
            case "/main.html":
            case "/ClientSide/main.html":
                // res.writeHead(300,"Cancel",{"content-type":"text/html"})
                // res.writeHead(300,"Cancel",{"set-cookie":"name=Aly"})
                // res.writeHead(300,"Cancel",{"set-cookie":['userName="Ahmed"',"userAge=20"]})
                // res.writeHead(300,"Cancel",{"set-cookie":['userName="Ahmed"',"userAge=20"]})
                //CORS [Server]
                // res.writeHead(200,"Ok",{"Access-Control-Allow-Origin":"*"})
                res.setHeader("set-Cookie","userAddress='123 st'")
                res.setHeader("Access-Control-Allow-Origin","*")
                // res.statusCode = 300;
                // res.statusMessage = "OKKKKK";
                res.write(mainHtml);
            break;
            case "/style.css":
            case "/ClientSide/style.css":
                res.write(styleCSS);
            break;
            case "/profile.html":
            case "/ClientSide/profile.html":
                res.write(profileHtml);
            break;
            case "/script.js":
            case "/ClientSide/script.js":
                res.write(scriptJS);
            break;
            case "/2.jpg":
            case "/ClientSide/2.jpg":
                res.write(image);
            break;
            case "/favicon.ico":
            case "/ClientSide/favicon.ico":
                res.write(favIcon);
            break;
            default:
                if(req.url.includes("/ClientSide/profile.html")){
                    res.write(profileHtml);
                }else{
                    res.write("<h1>Page Not Found</h1>")
                }
            break;
        }
        res.end();
    }
    //#endregion
    //#region POST
    else if(req.method == "POST"){
        // console.log("Inside POST");
        //recive Data
        req.on("data",function(data){ //Async
            userName = data.toString().split("=")[1]
            console.log(userName);
        })
        req.on("end",()=>{
            res.setHeader("content-type","text/html");
            // userName
            profileHtml = profileHtml.replace("{userName}",userName)
            res.write(profileHtml);
            res.end();
            profileHtml = profileHtml.replace(userName,"{userName}")
        })
    }
    //#endregion
    //#region PUT
    else if(req.method == "PUT"){
        
    }
    //#endregion
    //#region DELETE
    else if(req.method == "DELETE"){
        
    }
    //#endregion

}).listen("7002",()=>{console.log("http://localhost:7002")})




//json.parse() From String ==> array js
//json.stringify() From Array Js ===> String
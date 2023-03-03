const http = require("http");

http.createServer((req, res)=>{
    if(req.url != "/favicon.ico"){
        console.log(req.url);//string.split("/")
        console.log(req.method);
        console.log(res.statusCode);
        res.writeHead(201,{'content-type':"text/plain"})
        res.write("<h1>Hello at my Server</h1>")
    }
    res.end();
}).listen("7000");
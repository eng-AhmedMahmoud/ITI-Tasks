const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

let oldData = {
    name: "{clientName}",
    mobile: "{MobileNumber}",
    email: "{Email}",
    addr: "{Address}"
}

const server = http.createServer((req, res) => {
    if (req.method === "GET" && (req.url === "/" || req.url === "/main.html")) {
        fs.readFile(path.join(__dirname + "/main.html"), (err, data) => {
            if (err) {
                res.writeHead(500, {
                    "Content-Type": "text/html",
                });
                console.log(err);
                res.write("<h1>Internal Server Error</h1>");
                return res.end();
            }

            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write(data);
            return res.end();
        });
    } else if (req.method === "POST" && req.url === "/") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const formData = querystring.parse(body);

            const {
                name,
                mobile,
                addr,
                email
            } = formData;

            console.log(`formData`, formData);

            const clients = JSON.parse(fs.readFileSync(path.join(__dirname + "/clients.json")));
            clients.push(formData);

            fs.writeFileSync('clients.json', JSON.stringify(clients));

            fs.readFile(path.join(__dirname + "/welcome.html"), (err, data) => {
                if (err) {
                    res.writeHead(500, {
                        "Content-Type": "text/html",
                    });
                    res.write("<h1>Internal Server Error</h1>");
                    return res.end();
                }

                const html = data
                    .toString()
                    .replace(oldData.name, name)
                    .replace(oldData.mobile, mobile)
                    .replace(oldData.email, email)
                    .replace(oldData.addr, addr);

                res.writeHead(200, {
                    "Content-Type": "text/html",
                });
                res.write(html);
                return res.end();
            });
        });
    } else if (req.method === "GET" && (req.url === "/clients.json")) {
        fs.readFile("clients.json", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {
                    "Content-Type": "text/html"
                });
                res.write("<h1>Internal Server Error</h1>");
                return res.end();
            }

            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            return res.end(data);
        });
    } else {
        fs.readFile(path.join(__dirname + "/404.html"), (err, data) => {
            if (err) {
                res.writeHead(500, {
                    "Content-Type": "text/html",
                });
                res.write("<h1>Internal Server Error</h1>");
                return res.end();
            }

            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write(data);
            return res.end();
        });
    }
});

server.listen(7000, () => {
    console.log("http://localhost:7000");
});
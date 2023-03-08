//#region configuration
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
let PORT = process.env.PORT || 7003;
//#endregion

//#region  helpers
const getPath = (pathName) => {
    return path.join(__dirname, pathName)
}

let oldData = {
    name: "{clientName}",
    mobile: "{MobileNumber}",
    email: "{Email}",
    addr: "{Address}"
}

const statusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}
//#endregion

//#region  MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));//Forms
app.use(bodyParser.json());//Json Obj
//#endregion

//#region  Routes
app.get("/", (req, res) => {
    res.status(statusCodes.OK).sendFile(getPath("./client/html/main.html"))
})

app.post("/", async (req, res) => {
    const {
        name,
        mobile,
        addr,
        email
    } = req.body;

    const db = getPath("./assets/clients.json")

    const clients = JSON.parse(fs.readFileSync(db));
    clients.push(req.body);
    fs.writeFileSync(db, JSON.stringify(clients));
    const data = await fs.promises.readFile(getPath("./client/html/welcome.html"));
    const html = data
        .toString()
        .replace(oldData.name, name)
        .replace(oldData.mobile, mobile)
        .replace(oldData.email, email)
        .replace(oldData.addr, addr);

    res.status(statusCodes.OK).send(html);
})

app.get("/clients", async (req, res) => {
    const db = getPath("./assets/clients.json")
    const clients = await JSON.parse(fs.readFileSync(db));
    return res.status(statusCodes.OK).send(clients);
})

app.get("*", (req, res) => {
    res.status(statusCodes.NOT_FOUND).sendFile(getPath("./client/html/404.html"))
})
//#endregion

//#region  Start Server
app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`);
})
//#endregion
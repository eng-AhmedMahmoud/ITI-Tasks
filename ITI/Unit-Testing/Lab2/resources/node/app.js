const express = require("express")
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("hello world")
});

var server = app.listen(3000);
module.exports = server
var express = require("express");
var router = express.Router();
var UsersController = require("../Controllers/UsersController");

router.post("/",UsersController.Reg)

module.exports = router;
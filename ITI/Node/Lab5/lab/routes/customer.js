const express = require("express");
const router = express.Router();
const controller = require("../controllers/customer")
const middleware = require("../middlewares/customer");

router.get("/", controller.getAll);

router.get("/:id", controller.getOne);

router.post("/", middleware.createValidation, controller.create);

router.put("/:id", controller.updateOne);

router.delete("/:id", controller.deleteOne);

module.exports = router;

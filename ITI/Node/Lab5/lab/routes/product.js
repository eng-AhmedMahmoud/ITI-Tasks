const express = require("express");
const router = express.Router();
const controller = require("../controllers/product");
const middleware = require("../middlewares/product");

router.get("/", controller.getAll);

router.get("/:id", controller.getOne);

router.post("/", middleware.createValidation, controller.create);

router.put("/:id", controller.updateOne);

router.delete("/:id", controller.deleteOne); // new delete route

module.exports = router;

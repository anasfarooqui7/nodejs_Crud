const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemControllers");

// Routes
router.get("/", itemController.getAllItems);
router.post("/add", itemController.createItem);
router.post("/update/:id", itemController.updateItem);
router.get("/delete/:id", itemController.deleteItem);

module.exports = router;

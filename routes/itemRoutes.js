const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemControllers");
const verifyAge = require("../middlewares/ageMiddleware"); // Import middleware

// Routes
router.get("/", itemController.getAllItems);
router.post("/add", verifyAge, itemController.createItem); // Apply middleware
router.post("/update/:id", verifyAge, itemController.updateItem); // Apply middleware
router.get("/delete/:id", itemController.deleteItem);

module.exports = router;

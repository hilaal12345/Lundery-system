const express = require("express");
const router = express.Router();
const orderController = require("../controllers/newOrder");

// CREATE ORDER
router.post("/create/Order", orderController.createOrder);

// GET ALL
router.get("/read/Order", orderController.getAllOrders);

// GET SINGLE
router.get("/read/Order/:id", orderController.getOrderById);

// UPDATE
router.put("/update/Order/:id", orderController.updateOrder);

// DELETE
router.delete("/delete/Order/:id", orderController.deleteOrder);

module.exports = router;

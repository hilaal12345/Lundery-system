// const express = require("express")
// const orderController = require("../controllers/order")

// const router = express.Router()

// router.post("/create/order", orderController.createOrder)
// router.get("/read/order", orderController.readOrder)
// router.get("/getIncome/order", orderController.getTotalIncome)
// router.get("/getTopCustomer/order", orderController.getTopCustomers)

// module.exports = router
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

// POST: create order
router.post("/", orderController.createOrder);

// GET: get all orders
router.get("/", orderController.getOrders);

module.exports = router;




const express = require("express")
const orderController = require("../controllers/order")

const router = express.Router()

router.post("/create/order", orderController.createOrder)
router.get("/read/order", orderController.readOrder)
router.get("/getIncome/order", orderController.getTotalIncome)
router.get("/getTopCustomer/order", orderController.getTopCustomers)

module.exports = router
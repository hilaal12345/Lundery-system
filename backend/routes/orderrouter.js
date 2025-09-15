const express = require("express")
const { createOrder, readOrders } = require("../controllers/order")
const router = express.Router()

router.post("/orders", createOrder)
router.get("/orders", readOrders)

module.exports = router

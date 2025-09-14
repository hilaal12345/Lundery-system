const express = require("express")
const router = express.Router()
const customerController = require("../controllers/customer")

router.post("/create/customer", customerController.createCustomer)
router.post("/login/customer", customerController.customerLogin)
router.get("/read/customer", customerController.readCustomer)

module.exports = router

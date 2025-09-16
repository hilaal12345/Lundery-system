const express = require("express")
const router = express.Router()
const customerController = require("../controllers/customer")
const { verifyToken, isAdmin } = require("../middleware/Auth")

router.post("/create/customer", customerController.createCustomer)
router.post("/login/customer", customerController.customerLogin)


router.get("/readd/customer",customerController.readCustomer)
router.get("/read/customer",verifyToken,isAdmin,customerController.readCustomer)

module.exports = router

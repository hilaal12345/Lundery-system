const express = require("express")
const router = express.Router()
const adminController = require("../controllers/admin")

router.post("/create/admin", adminController.createAdmin)
router.post("/login/admin", adminController.adminLogin)



module.exports = router

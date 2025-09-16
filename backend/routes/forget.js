const express = require("express")
const  forgetPassword  = require("../controllers/forget")

const router = express.Router()


router.post("/forget-password",forgetPassword. forgetPassword)

module.exports = router

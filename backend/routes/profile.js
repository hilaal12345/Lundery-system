const express = require("express")
const router = express.Router()

const profileC=require("../controllers/profile")

const uploadImage = require("../middleware/uploadimage")

router.post("/create/profile", uploadImage.single("img"),profileC.createProfile)

module.exports = router


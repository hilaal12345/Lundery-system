const express = require("express")
const router = express.Router()
const serviceController = require("../controllers/service")
// const uploadImage = require("../middleware/uploadImage")

router.post("/create/service",serviceController.createService)

// get
router.post("/read/service", serviceController.readService)

// readsingledata
router.get("/readSingle/service/:id", serviceController.readSingleService)

// updateProduct

router.put("/update/service/:id",serviceController.updateService)

// deleteProduct
router.delete("/delete/service/:id", serviceController.deletService)

module.exports = router

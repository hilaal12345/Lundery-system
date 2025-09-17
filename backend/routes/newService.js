
 const express = require("express")
 const router = express.Router()
 const serviceController = require("../controllers/newService")
// const uploadImage = require("../middleware/uploadImage")

 router.post("/create/Newservices",serviceController.createService)

// // // get
router.get("/read/Newservices", serviceController.getAllServices)

// // // readsingledata
router.get("/readSingle/Newservices/:id", serviceController.getServiceById)

// // // updateProduct

router.put("/update/Newservices/:id",serviceController.updateService)


// // // deleteProduct
 router.delete("/delete/Newservices/:id", serviceController.deleteService)

 module.exports = router
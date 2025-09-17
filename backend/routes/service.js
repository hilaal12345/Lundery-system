// // const express = require("express")
// // const router = express.Router()
// // const serviceController = require("../controllers/service")
// // // const uploadImage = require("../middleware/uploadImage")

// // router.post("/create/service",serviceController.createService)

// // // get
// // router.post("/read/service", serviceController.readService)

// // // readsingledata
// // router.get("/readSingle/service/:id", serviceController.readSingleService)

// // // updateProduct

// // router.put("/update/service/:id",serviceController.updateService)


// // // deleteProduct
// // router.delete("/delete/service/:id", serviceController.deletService)

// // module.exports = router

// const express = require("express");
// const {
//   createService,
//   readService,
//   readSingleService,
//   updateService,
//   deleteService
// } = require("../controllers/serviceController");

// const router = express.Router();

// // Create a new service
// router.post("/", createService);

// // Get all services (with optional filters)
// router.get("/", readService);

// // Get single service by ID
// router.get("/:id", readSingleService);

// // Update service by ID
// router.put("/:id", updateService);

// // Delete service by ID
// router.delete("/:id", deleteService);

// module.exports = router;



// const express = require("express");
// const {
//   createService,
//   readService,
//   readSingleService,
//   updateService,
//   deleteService
// } = require("../controllers/service");

// const router = express.Router();

// router.post("/", createService);
// router.get("/", readService);
// router.get("/:id", readSingleService);
// router.put("/:id", updateService);
// router.delete("/:id", deleteService);

// module.exports = router;

 const express = require("express")
 const router = express.Router()
 const serviceController = require("../controllers/service")
// const uploadImage = require("../middleware/uploadImage")

 router.post("/create/service",serviceController.createService)

// // // get
router.get("/read/service", serviceController.readService)

// // // readsingledata
router.get("/readSingle/service/:id", serviceController.readSingleService)

// // // updateProduct

router.put("/update/service/:id",serviceController.updateService)


// // // deleteProduct
 router.delete("/delete/service/:id", serviceController.deleteService)

 module.exports = router
// const express = require("express")
// const { createOrder, readOrders, deleteOrder, updateOrder, readSingleOrder } = require("../controllers/order")
// const router = express.Router()

// router.post("/orders", createOrder)
// router.get("/orders", readOrders)
// // readsingledata
// router.get("/orders/:id", readSingleOrder)
// // updateProduct

// router.put("/orders/:id",updateOrder)

// // // deleteProduct
// // router.delete("/delete/product/:id",deleteOrder)
// router.delete("/orders/:id", deleteOrder);



// module.exports = router

const express = require("express");
const { createOrder, readOrders, readSingleOrder, updateOrder, deleteOrder } = require("../controllers/order");
const router = express.Router();

router.post("/orders", createOrder);
router.get("/orders", readOrders);
router.get("/orders/:id", readSingleOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

module.exports = router;


// const Order = require("../models/order")

// // Create order
// const createOrder = async (req, res) => {
//   const { customer, service } = req.body

//   if (!customer) return res.status(400).json({ message: "Customer info required" })

//   const newOrder = new Order({ customer, service })
//   newOrder.calculateTotal() // xisaabi total
//   await newOrder.save()

//   res.status(201).json(newOrder)
// }

// // Read all orders
// const readOrders = async (req, res) => {
//   const orders = await Order.find()
//   res.json(orders)
// }

// //read-single

// const readSingleOrder = async(req,res) => {
//     try{
//         const getData = await Order.find({_id: req.params.id})
//         if(getData){
//         res.send(getData)
//     }
//     } catch(error){
//         res.status(400).json({message: error.message})

//     }
// }

// //update

// const updateOrder = async(req,res) => {
//     try{
//         const { name, price, desc, quantity,category } = req.body
//         const updateData = await Order.updateOne(
//             {_id: req.params.id},
//             {$set: {
//                 name: name,
                

//             }}
//         )
//         if(updateData){
//             res.send("succes update")
//         }
//     } catch(error){
//         res.status(400).json({message: error.message})
//     }
// }   


// //delet
// const deleteOrder = async (req, res) => {
//   try {
//     const deleteData = await Order.deleteOne({ _id: req.params.id });
//     if (deleteData.deletedCount > 0) {
//       res.status(200).json({ message: "Order deleted successfully" });
//     } else {
//       res.status(404).json({ message: "Order not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { createOrder, readOrders ,deleteOrder ,readSingleOrder,updateOrder}


const Order = require("../models/order");

// Create order
const createOrder = async (req, res) => {
  const { customer, service } = req.body;
  if (!customer) return res.status(400).json({ message: "Customer info required" });

  const newOrder = new Order({ customer, service });
  newOrder.calculateTotal(); // xisaabi total
  await newOrder.save();

  res.status(201).json(newOrder);
};

// Read all orders
const readOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

// Read single order
const readSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update order
const updateOrder = async (req, res) => {
  try {
    const { customer, service } = req.body;

    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    // Update fields
    if (customer) order.customer = customer;
    if (service) order.service = service;

    // Recalculate total
    order.calculateTotal();

    await order.save();
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const deleteData = await Order.deleteOne({ _id: req.params.id });
    if (deleteData.deletedCount > 0) {
      res.status(200).json({ message: "Order deleted successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, readOrders, readSingleOrder, updateOrder, deleteOrder };

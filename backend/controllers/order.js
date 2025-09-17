
// const Order = require("../models/order");

// // Create order
// const createOrder = async (req, res) => {
//   const { customer, service } = req.body;
//   if (!customer) return res.status(400).json({ message: "Customer info required" });

//   const newOrder = new Order({ customer, service });
//   newOrder.calculateTotal(); 
//   await newOrder.save();

//   res.status(201).json(newOrder);
// }; 


// // Read all orders
// const readOrders = async (req, res) => {
//   const orders = await Order.find();
//   res.json(orders);
// };

// // Read single order
// const readSingleOrder = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) return res.status(404).json({ message: "Order not found" });
//     res.json(order);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update order
// const updateOrder = async (req, res) => {
//   try {
//     const { customer, service } = req.body;

//     const order = await Order.findById(req.params.id);
//     if (!order) return res.status(404).json({ message: "Order not found" });

//     // Update fields
//     if (customer) order.customer = customer;
//     if (service) order.service = service;

//     // Recalculate total
//     order.calculateTotal();

//     await order.save();
//     res.json(order);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete order
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

// module.exports = { createOrder, readOrders, readSingleOrder, updateOrder, deleteOrder };
const Order = require("../models/order");
const Service = require("../models/servicemodel");

// Create order
const createOrder = async (req, res) => {
  try {
    const { customer, service, delivery } = req.body;

    // Hel price-ka service-ka laga soo geliyey model-ka Service
    const serviceData = await Service.findById(service.serviceId);

    if (!serviceData) return res.status(404).json({ message: "Service not found" });

    // Ku dar price
    service.price_washing = serviceData.price_washing;
    service.price_ironing = serviceData.price_ironing;

    const order = new Order({ customer, service, delivery });
    order.calculateTotal(); // xisaabi total
    await order.save();

    res.status(201).json({ message: "Order created", data: order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all
const readOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read single
const readSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update order
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!order) return res.status(404).json({ message: "Order not found" });
    order.calculateTotal();
    await order.save();
    res.status(200).json({ message: "Order updated", data: order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createOrder, readOrders, readSingleOrder, updateOrder, deleteOrder };

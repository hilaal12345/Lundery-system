const Order = require("../models/order")

// Create order
const createOrder = async (req, res) => {
  const { customer, service } = req.body

  if (!customer) return res.status(400).json({ message: "Customer info required" })

  const newOrder = new Order({ customer, service })
  newOrder.calculateTotal() // xisaabi total
  await newOrder.save()

  res.status(201).json(newOrder)
}

// Read all orders
const readOrders = async (req, res) => {
  const orders = await Order.find()
  res.json(orders)
}

module.exports = { createOrder, readOrders }

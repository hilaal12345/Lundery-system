// controllers/statsController.js
const Customer = require("../models/customer");
const Admin = require("../models/admin");
const Order = require("../models/order");

const getStats = async (req, res) => {
  try {
    const customers = await Customer.countDocuments();
    const admins = await Admin.countDocuments();
    const orders = await Order.countDocuments();

    const revenueAgg = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ]);
    const revenue = revenueAgg[0]?.total || 0;

    res.json({ customers, admins, orders, revenue });
  } catch (err) {
    res.status(500).json({ error: "Error fetching stats" });
  }
};

module.exports = { getStats };

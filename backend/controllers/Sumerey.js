// const Order = require("../models/order");
// const Customer = require("../models/customer");

// // Get total orders and spending per customer
// const getCustomerOrdersSummary = async (req, res) => {
//   try {
//     // Aggregate orders per customer
//     const summary = await Order.aggregate([
//       {
//         $group: {
//           _id: "$customer", // group by customer id
//           totalOrders: { $sum: 1 },
//           totalSpent: { $sum: "$totalAmount" } // totalAmount should be in your Order schema
//         }
//       },
//       { $sort: { totalSpent: -1 } } // sort by top spender
//     ]);

//     // Populate customer info
//     const populatedSummary = await Customer.populate(summary, { path: "_id", select: "name email phone" });

//     res.status(200).json(populatedSummary);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// module.exports = { getCustomerOrdersSummary };

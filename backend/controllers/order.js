// const orderModel = require("../model/orderModel")

// const createOrder = async (req, res) => {
//     const { customer, services } = req.body

// //     if (!products || products.length === 0) {
// //         return res.status(400).json({ message: "product is required" })
// //     }

//     let TotalAmount = 0
//     let orders = []

// //     for (let items of products) {
// //         const productData = await productModel.findById(items.productId)

// //         if (!productData) {
// //             return res.status(400).json({ error: `this product not found`})
// //         }


//         // total amount
//         let price = serviceData.price
//         let total = price * items.kg
//         TotalAmount += total

//         // kg
//         if (items.kg > productData.kg){
//             return res.status(400).json({ message:"this product out of stock" })
//         }

//         productData.quantity -= items.quantity
//         await productData.save()


//         orders.push({
//             serviceId: serviceData._id,
//             kg: items.kg,
//             price,
//             total
//         })

//     }

//     if (!customer) {
//         return res.status(400).json({ message: "customer is required" })

//     }

//     const newData = new orderModel({
//         customer,
//         products: orders,
//         TotalAmount
//     })

//     await newData.save()

//     res.send(newData)



// // read order

// const readOrder = async (req, res) => {
//     const getOrder = await orderModel.find().populate("products.productId", "name price")
//     if(getOrder){
//         res.send(getOrder)
//     }
// }

// //get total income

// const getTotalIncome = async (req, res) => {
//     const totalIncome = await orderModel.aggregate([
//         {
//             $group: {
//                 _id: null,
//                 totalIncome: { $sum: "$TotalAmount" }
//             }
//         }
//     ])
//     if(totalIncome){
//         res.send(totalIncome)
//     }
// }

// const getTopCustomers = async (req, res) => {
//     const topCustomers = await orderModel.aggregate([
//         {
//             $group:{
//                 _id: "$customer",
//                 totalSpent: { $sum: "$TotalAmount" },
//                 totalOrders: { $sum: 1 }
//             }
//         },
//         { $sort:{ totalSpent:-1} },
//         { $limit:5 }
//     ])
//     if(topCustomers.length === 0){
//         return res.status(400).json({message:"No customers found" })
//     }
//     res.json(topCustomers.map(item => ({
//         customer: item._id,
//         totalSpent: item.totalSpent,
//         totalOrders: item.totalOrders

//     }))
// )
// }



// module.exports = { createOrder, readOrder,getTotalIncome,getTopCustomers }

const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { customer, service } = req.body;
    const order = new Order({ customer, service });

    // xisaabi total
    order.calculateTotal();

    await order.save();
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

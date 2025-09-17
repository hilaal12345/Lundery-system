
// const mongoose = require("mongoose");

// // Service prices
// const WASH_PRICE_PER_KG = 5;
// const IRON_PRICE_PER_KG = 2;

// const orderSchema = mongoose.Schema({
//   customer: {
//     name: { type: String, required: true },
//     // address: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     district: { type: String, required: true },
//     neighborhood: { type: String, required: true },
//   },

//   service: {
//     washing: { type: Boolean, default: false },
//     ironing: { type: Boolean, default: false },
//     washKg: { type: Number, default: 0 },
//     ironKg: { type: Number, default: 0 },
//   },
//   totalAmount: { type: Number, required: true },
//   createdAt: { type: Date, default: Date.now },
// }); 

// // Xisaabinta total
// orderSchema.methods.calculateTotal = function () {
//   let total = 0;
//   if (this.service.washing) total += this.service.washKg * WASH_PRICE_PER_KG;
//   if (this.service.ironing) total += this.service.ironKg * IRON_PRICE_PER_KG;
//   this.totalAmount = total;
//   return total;
// };

// module.exports = mongoose.model("Order", orderSchema);
const mongoose = require("mongoose");

// Waxaa laga soo qaatay service model
const orderSchema = mongoose.Schema(
  {
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      district: { type: String, required: true },
      neighborhood: { type: String, required: true },
    },
    service: {
      washing: { type: Boolean, default: false },
      ironing: { type: Boolean, default: false },
      washKg: { type: Number, default: 0 },
      ironKg: { type: Number, default: 0 },
      price_washing: { type: Number, default: 0 }, // price laga soo qaadayo Service model
      price_ironing: { type: Number, default: 0 }, 
    },
    delivery: {
      type: String,
      enum: ["pickup", "dropoff", "both", "none"],
      default: "none",
    },
    deliveryFee: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 }, 
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Xisaabinta total
orderSchema.methods.calculateTotal = function () {
  let total = 0;
  if (this.service.washing) total += this.service.washKg * this.service.price_washing;
  if (this.service.ironing) total += this.service.ironKg * this.service.price_ironing;

  let deliveryFee = 0;
  if (this.delivery === "pickup" || this.delivery === "dropoff") deliveryFee = 5;
  else if (this.delivery === "both") deliveryFee = 10;

  this.deliveryFee = deliveryFee;
  this.totalAmount = total + deliveryFee;
  return this.totalAmount;
};

module.exports = mongoose.model("Order", orderSchema);



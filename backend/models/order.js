// const  mongoose = require("mongoose")

// const orderSchema = mongoose.Schema({
//     customer: {
//         type:String,
//         required: true
//     },
//     services: [
//         {
//             serviceId:{type: mongoose.Schema.Types.ObjectId, ref:"service", required: true},
//             quantity:{type: Number, required: true} 

//         }
//     ],
//     TotalAmount: {type: Number, required: true}
// })

// module.exports = mongoose.model("order", orderSchema)
const mongoose = require("mongoose");

// Service prices
const WASH_PRICE_PER_KG = 5;
const IRON_PRICE_PER_KG = 2;

const orderSchema = mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    address: { type: String, required: true },
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
  },
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Xisaabinta total
orderSchema.methods.calculateTotal = function () {
  let total = 0;
  if (this.service.washing) total += this.service.washKg * WASH_PRICE_PER_KG;
  if (this.service.ironing) total += this.service.ironKg * IRON_PRICE_PER_KG;
  this.totalAmount = total;
  return total;
};

module.exports = mongoose.model("Order", orderSchema);


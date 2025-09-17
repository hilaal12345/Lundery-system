const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Service = require("../models/newService"); // hubi path-ka saxda

const orderSchema = new mongoose.Schema({
  
  orderNumber: { type: Number, unique: true }, // Auto increment field
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    district: { type: String, required: true },
    neighborhood: { type: String, required: true },
  },
  services: {
    washing: { type: Boolean, default: false },
    ironing: { type: Boolean, default: false },
    kg_washing: { type: Number, default: 0, min: 0 },
    kg_ironing: { type: Number, default: 0, min: 0 },
  },
  delivery: {
    type: String,
    enum: ["pickup", "dropoff", "both", "none"],
    default: "none",
  },
  price_washing: { type: Number, default: 0 },
  price_ironing: { type: Number, default: 0 },
  delivery_price: { type: Number, default: 0 },
  total_price: { type: Number, default: 0 },
}, { timestamps: true });

// Auto increment plugin
orderSchema.plugin(AutoIncrement, { inc_field: 'orderNumber' });

// Pre-save hook to calculate prices
orderSchema.pre("save", async function(next) {
  const order = this;
  const service = await Service.findOne();

  let washingPrice = 0;
  let ironingPrice = 0;
  let deliveryPrice = 0;

  if (order.services.washing) washingPrice = order.services.kg_washing * service.price_washing;
  if (order.services.ironing) ironingPrice = order.services.kg_ironing * service.price_ironing;

  if (order.delivery === "pickup") deliveryPrice = service.delivery;
  else if (order.delivery === "dropoff") deliveryPrice = service.delivery;
  else if (order.delivery === "both") deliveryPrice = service.delivery * 2;

  order.price_washing = washingPrice;
  order.price_ironing = ironingPrice;
  order.delivery_price = deliveryPrice;
  order.total_price = washingPrice + ironingPrice + deliveryPrice;

  next();
});

module.exports = mongoose.model("NewOrder", orderSchema);

const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const serviceSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  price_washing: { type: Number, default: 0, min: 0 },
  price_ironing: { type: Number, default: 0, min: 0 },
  kg: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    enum: ["Washing", "Ironing", "Dry Cleaning", "All"],
    default: "All",
  },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  delivery: {
    type: String,
    enum: ["Pickup", "Dropoff", "Both", "None"],
    default: "None",
  },
  deliveryFee: { type: Number, default: 0 }, // Haddii delivery jiro
  totalPrice: { type: Number, default: 0 },  // price x kg + delivery
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

serviceSchema.plugin(AutoIncrement, { inc_field: 'prId' });

// Pre-save hook to calculate totalPrice automatically
serviceSchema.pre("save", function(next) {
  let basePrice = 0;
  if (this.category === "Washing") basePrice = this.price_washing * this.kg;
  else if (this.category === "Ironing") basePrice = this.price_ironing * this.kg;
  
  // delivery fee logic
  let deliveryFee = 0;
  if (this.delivery === "Pickup" || this.delivery === "Dropoff" || this.delivery === "Both") {
    deliveryFee = 5; // tusaale delivery fee fixed $5
  }

  this.deliveryFee = deliveryFee;
  this.totalPrice = basePrice + deliveryFee;

  next();
});

module.exports = mongoose.model("Service", serviceSchema);


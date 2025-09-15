const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);


const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  kg: {
    type: Number,
    required: true,
   
  },
  category: {
    type: String,
    enum: ["Washing","Ironing","Dry Cleaning","All"],
    default: "All",
  }, 

  status:{
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps: true});
serviceSchema.plugin(AutoIncrement, { inc_field: 'prId' });

module.exports = mongoose.model("Service", serviceSchema);

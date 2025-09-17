const mongoose = require("mongoose");

// const AutoIncrement = require('mongoose-sequence')(mongoose);
const serviceSchema = new mongoose.Schema({
  price_washing: {
    type: Number,
    required: true,
    min: 0
  },
  price_ironing: {
    type: Number,
    required: true,
    min: 0
  },
  delivery: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model("NewService", serviceSchema);


const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  role: { type: String, enum: ["customer", "admin"], default: "customer" }
})

module.exports = mongoose.model("User", UserSchema)

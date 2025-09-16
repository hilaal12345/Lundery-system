const bcrypt = require("bcryptjs")
const User = require("../models/forget") 


const forgetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body

    // check user exists
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "Email not found" })
    }

    // hash new password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    // update
    user.password = hashedPassword
    await user.save()

    res.json({ message: "Password updated successfully" })
  } catch (err) {
    console.error("Forget password error:", err)
    res.status(500).json({ message: "Server error" })
  }
}

module.exports = { forgetPassword }

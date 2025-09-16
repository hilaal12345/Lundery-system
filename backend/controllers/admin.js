const adminModel = require("../models/admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // check if email already exists
    const existEmail = await adminModel.findOne({ email })
    if (existEmail) {
      return res.status(400).json({ error: "Email already exists" })
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10)

    const newAdmin = new adminModel({
      name,
      email,
      password: hashPassword,
    })

    await newAdmin.save()

    res.status(200).json({
      message: "Admin created successfully",
      admin: {
        name: newAdmin.name,
        email: newAdmin.email,
      },
    })
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    // email check
    const existAdmin = await adminModel.findOne({ email })
    if (!existAdmin) {
      return res.status(400).json({ error: "Invalid email" })
    }

    // password check
    const checkPassword = await bcrypt.compare(password, existAdmin.password)
    if (!checkPassword) {
      return res.status(400).json({ error: "Invalid password" })
    }

    //  generate token
    const token = jwt.sign(
      {id: existAdmin._id,name: existAdmin.name,email: existAdmin.email,role: existAdmin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

    res.json({message: "Login successful",
      admin: {
        name: existAdmin.name,
        email: existAdmin.email,
      },
      token,
    })
  } catch (error) {
  res.status(500).json({
    error: "Server error",
    details: error.message  // <-- halkan waxaad ka arki kartaa sababta qaladka
  });
}
}

const readAdmin = async (req, res) => {
  try {
    const customers = await adminModel.find().select("-password"); // password ma soo celinayo
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createAdmin, adminLogin,readAdmin }
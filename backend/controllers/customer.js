// const customerModel = require("../models/customer")
// const bcrypt = require("bcryptjs");

// // create customer
// const createCustomer = async (req, res) => {
//   try {
//     const { name, phone, email, password } = req.body;

//     // check if email already exists
//     const existEmail = await customerModel.findOne({ email });
//     if (existEmail) {
//       return res.status(400).json({ error: "The email is already registered" });
//     }

//     // hash password
//     const hashPassword = await bcrypt.hash(password, 10);

//     const newData = new customerModel({
//       name,
//       phone,
//       email,
//       password: hashPassword,
//     });

//     await newData.save();
//     res.send(newData);
//   } catch (error) {
//     return res.status(500).json({ message: "server error",});
//   }
// };

// // login customer
// const customerLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // email-check
//     const existEmail = await customerModel.findOne({ email });
//     if (!existEmail) {
//       return res.status(400).json({ error: "Invalid email" });
//     }

//     const checkPassword = await bcrypt.compare(password, existEmail.password);
//     if (!checkPassword) {
//       return res.status(400).json({ error: "Invalid password" });
//     }

//     res.json({
//       message: "Success login",
//       customer: {
//         name: existEmail.name,
//         phone: existEmail.phone,
//         email: existEmail.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ error: "server error", details: error.message });
//   }
// };

// // read customers
// const readCustomer = async (req, res) => {
//   try {
//     const getCustomer = await customerModel.find();
//     res.status(200).json(getCustomer);
//   } catch (error) {
//     res.status(500).json({ message: "server error", error: error.message });
//   }
// };

// module.exports = { createCustomer, customerLogin, readCustomer};



const customerModel = require("../models/customer");
const bcrypt = require("bcryptjs");

// CREATE CUSTOMER
const createCustomer = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    // Hubi haddii email horey u diiwaangashan yahay
    const existEmail = await customerModel.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ error: "The email is already registered" });
    }

    // Hash garee password-ka
    const hashPassword = await bcrypt.hash(password, 10);

    const newCustomer = new customerModel({
      name,
      phone,
      email,
      password: hashPassword,
    });

    await newCustomer.save();
    res.status(201).json({
      message: "Customer created successfully",
      customer: {
        prId: newCustomer.prId,
        name: newCustomer.name,
        phone: newCustomer.phone,
        email: newCustomer.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// CUSTOMER LOGIN
const customerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hubi email
    const customer = await customerModel.findOne({ email });
    if (!customer) {
      return res.status(400).json({ error: "Invalid email" });
    }

    // Hubi password
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successful",
      customer: {
        prId: customer.prId,
        name: customer.name,
        phone: customer.phone,
        email: customer.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// READ CUSTOMERS
const readCustomer = async (req, res) => {
  try {
    const customers = await customerModel.find().select("-password"); // password ma soo celinayo
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createCustomer, customerLogin, readCustomer };


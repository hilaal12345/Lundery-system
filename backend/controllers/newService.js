// const Service = require("../models/newService");

// // CREATE
// const createService = async (req, res) => {
//   try {
//     const { price_washing, price_ironing, delivery} = req.body;

//     const newService = new Service({
//       price_washing,
//       price_ironing,
//       delivery
//     });

//     const savedService = await newService.save();
//     res.status(201).json(savedService);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // READ ALL
// const getAllServices = async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.status(200).json(services);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // READ SINGLE
// const getServiceById = async (req, res) => {
//   try {
//     const service = await Service.findById(req.params.id);
//     if (!service) return res.status(404).json({ message: "Service not found" });
//     res.status(200).json(service);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // UPDATE
// const updateService = async (req, res) => {
//   try {
//     const updatedService = await Service.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!updatedService) return res.status(404).json({ message: "Service not found" });
//     res.status(200).json(updatedService);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // DELETE
// const deleteService = async (req, res) => {
//   try {
//     const deletedService = await Service.findByIdAndDelete(req.params.id);
//     if (!deletedService) return res.status(404).json({ message: "Service not found" });
//     res.status(200).json({ message: "Service deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   createService,
//   getAllServices,
//   getServiceById,
//   updateService,
//   deleteService
// };
// const Service = require("../models/newService");

// // CREATE
// const createService = async (req, res) => {
//   try {
//     const { price_washing, price_ironing, delivery } = req.body;

//     const newService = new Service({
//       price_washing,
//       price_ironing,
//       delivery
//     });

//     const savedService = await newService.save();
//     res.status(201).json(savedService);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // READ ALL
// const getAllServices = async (req, res) => {
//   try {
//     const services = await Service.find().sort({ createdAt: 1 }); // sort by creation date
//     res.status(200).json(services);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // // READ SINGLE
// // const getServiceById = async (req, res) => {
// //   try {
// //     const service = await Service.findById(req.params.id); // <-- use _id
// //     if (!service) return res.status(404).json({ message: "Service not found" });
// //     res.status(200).json(service);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // // UPDATE
// // const updateService = async (req, res) => {
// //   try {
// //     const updatedService = await Service.findByIdAndUpdate(
// //       req.params.id, // <-- use _id
// //       req.body,
// //       { new: true, runValidators: true }
// //     );
// //     if (!updatedService) return res.status(404).json({ message: "Service not found" });
// //     res.status(200).json(updatedService);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // // DELETE
// // const deleteService = async (req, res) => {
// //   try {
// //     const deletedService = await Service.findByIdAndDelete(req.params.id); // <-- use _id
// //     if (!deletedService) return res.status(404).json({ message: "Service not found" });
// //     res.status(200).json({ message: "Service deleted successfully" });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };



// //read
// // const getServiceById = async(req,res) => {
// //     try{
// //         const {category} = req.body || {}

// //         let filterData = {}

// //         if(category){
// //             filterData = {category}
// //         }
// //         const readData = await .find(filterData)
// //         if(readData){
// //             res.send(readData)
// //         }
// //     } catch(error) {
// //         res.status(400).json({message: error.message})

// //     }
// // }
// //read-single

// const  getServiceById= async(req,res) => {
//     try{
//         const getData = await  Service.find({_id: req.params.id})
//         if(getData){
//         res.send(getData)
//     }
//     } catch(error){
//         res.status(400).json({message: error.message})

//     }
// }

// //update

// const  updateService= async(req,res) => {
//     try{
//        const { price_washing, price_ironing, delivery } = req.body;
//         const updateData = await services.updateOne(
//             {_id: req.params.id},
//             {$set: {
//                 price_washing
//                 price_ironing
//                 delivery

//             }}
//         )
//         if(updateData){
//             res.send("succes update")
//         }
//     } catch(error){
//         res.status(400).json({message: error.message})
//     }
// }

// // delete

// const  deleteService= async(req,res) => {
//     try{
//         const deleteData = await Service.deleteOne({_id:req.params.id})
//         if(deleteData){
//             res.send("succes delete")
//         }
//     } catch(error){
//         res.status(400).json({message: error.message})
//     }

// }   

// module.exports = {
//   createService,
//   getAllServices,
//   getServiceById,
//   updateService,
//   deleteService
// };
const Service = require("../models/newService");

// CREATE
const createService = async (req, res) => {
  try {
    const { price_washing, price_ironing, delivery } = req.body;

    const newService = new Service({
      price_washing,
      price_ironing,
      delivery
    });

    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: 1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ SINGLE
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateService = async (req, res) => {
  try {
    const { price_washing, price_ironing, delivery } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { price_washing, price_ironing, delivery },
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({
      message: "Success update",
      service: updatedService
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Success delete" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
};

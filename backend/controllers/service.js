// const servicemodel=require("../models/servicemodel")
// //create
// const createService=async(req,res)=>{
//           try{
//                     const {name,desc,price,kg,category}= req.body
//                     const newData=servicemodel({
//                               name:name,
//                               desc:desc,
//                               price:price,
//                               kg:kg,
//                               category:category
//                     })
//                      await newData.save()
//                     res.send(newData)
//           } catch (error) {
//                     res.status(400).json({ message: error.message })
//           }

// }

// //read 
// const readService=async(req,res)=>{
//            try{
//         const {category} = req.body || {}

//         let filterData = {}

//         if(category){
//             filterData = {category}
//         }
//         const readData = await servicemodel.find(filterData)
//         if(readData){
//             res.send(readData)
//         }
//     } catch(error) {
//         res.status(400).json({message: error.message})

//     }
// }

// //read single
// const readSingleService = async(req,res) => {
//     try{
//         const getData = await servicemodel.find({_id: req.params.id})
//         if(getData){
//         res.send(getData)
//     }
//     } catch(error){
//         res.status(400).json({message: error.message})

//     }
// }
// //update
// // const updateService=async(req,res)=>{
// //           try{
// //         const { name, price, desc, kg,category } = req.body
// //         const updateData = await productModel.updateOne(
// //             {_id: req.params.id},
// //             {$set: {
// //                     name:name,
// //                     desc:desc,
// //                     price:price,
// //                     kg:kg,
// //                     category:category
               

// //             }}
// //         )
// //         if(updateData){
// //             res.send("succes update")
// //         }
// //     } catch(error){
// //         res.status(400).json({message: error.message})
// //     }
// // }

// const updateService = async (req, res) => {
//   try {
//     const { name, price, desc, kg, category } = req.body;

//     const updatedService = await productModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           name,
//           desc,
//           price,
//           kg,
//           category
//         }
//       },
//       { new: true } // soo celi xogta cusub
//     );

//     if (!updatedService) {
//       return res.status(404).json({ message: "Service not found" });
//     }

//     res.status(200).json({
//       message: "Update successful",
//       data: updatedService
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

   
// //delet
// const deletService=async(req,res)=>{
//           try{
//         const deleteData = await servicemodel.deleteOne({_id:req.params.id})
//         if(deleteData){
//             res.send("succes delete")
//         }
//     } catch(error){
//         res.status(400).json({message: error.message})
//     }
// }


// module.exports={createService,readService,readSingleService,updateService,deletService}


const Service = require("../models/servicemodel");

// Create Service
const createService = async (req, res) => {
  try {
    const {
      name, desc, price_washing, price_ironing, kg,
      category, status, delivery
    } = req.body;

    const newService = new Service({
      name, desc, price_washing, price_ironing,
      kg, category, status, delivery
    });

    await newService.save();

    res.status(201).json({
      message: "Service created successfully",
      data: newService
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all
const readService = async (req, res) => {
  try {
    const { category, status, delivery } = req.query;
    let filterData = {};
    if (category) filterData.category = category;
    if (status) filterData.status = status;
    if (delivery) filterData.delivery = delivery;

    const services = await Service.find(filterData).sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read single
const readSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Service
const updateService = async (req, res) => {
  try {
    const {
      name, desc, price_washing, price_ironing, kg,
      category, status, delivery
    } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: { name, desc, price_washing, price_ironing, kg, category, status, delivery } },
      { new: true, runValidators: true }
    );

    if (!updatedService) return res.status(404).json({ message: "Service not found" });

    // recalculating totalPrice manually in case kg/category/delivery changed
    await updatedService.save();

    res.status(200).json({
      message: "Service updated successfully",
      data: updatedService
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Service
const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ message: "Service not found" });
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createService,
  readService,
  readSingleService,
  updateService,
  deleteService
};

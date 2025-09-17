// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function UpdateService() {
//   const { id } = useParams(); // qaado ID-ga URL ka
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     desc: "",
//     price: "",
//     kg: "",
//     category: "All",
//     status: "Active",
//   });

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Fetch xogtii hore
//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/service/${id}`);
//         setFormData({
//           name: res.data.name || "",
//           desc: res.data.desc || "",
//           price: res.data.price || "",
//           kg: res.data.kg || "",
//           category: res.data.category || "All",
//           status: res.data.status || "Active",
//         });
//       } catch (error) {
//         console.error("Failed to fetch service:", error);
//         setMessage("Failed to load service data.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchService();
//   }, [id]);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:3000/service/${id}`, formData);
//       setMessage("✅ Service updated successfully!");
//       setTimeout(() => navigate("/services"), 1500); // dib ugu laabo services page
//     } catch (error) {
//       console.error(error);
//       setMessage("❌ Failed to update service. Please try again.");
//     }
//   };

//   if (loading) return <p className="text-center mt-10">Loading service data...</p>;

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
//       <h2 className="text-2xl font-bold mb-4">Update Service</h2>

//       {message && <p className="mb-4 text-green-600">{message}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Service Name */}
//         <div>
//           <label className="block text-gray-700">Service Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="desc"
//             value={formData.desc}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>

//         {/* Price */}
//         <div>
//           <label className="block text-gray-700">Price (£)</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             min="0"
//             required
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>

//         {/* Kg */}
//         <div>
//           <label className="block text-gray-700">Kg</label>
//           <input
//             type="number"
//             name="kg"
//             value={formData.kg}
//             onChange={handleChange}
//             min="0"
//             required
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-gray-700">Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//           >
//             <option value="Washing">Washing</option>
//             <option value="Ironing">Ironing</option>
//             <option value="Dry Cleaning">Dry Cleaning</option>
//             <option value="All">All</option>
//           </select>
//         </div>

//         {/* Status */}
//         <div>
//           <label className="block text-gray-700">Status</label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
//         >
//           Update Service
//         </button>
//       </form>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function UpdateNewService() {
//   const [services, setServices] = useState([]);
//   const [editingService, setEditingService] = useState(null);
//   const [formData, setFormData] = useState({
//     price_washing: "",
//     price_ironing: "",
//     delivery: "",
//   });

//   // fetch all services
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/read/Newservices")
//       .then((res) => setServices(res.data))
//       .catch((err) => console.error("Error fetching services:", err));
//   }, []);

//   // delete service
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/delete/Newservices/${id}`);
//       setServices(services.filter((service) => service._id !== id));
//     } catch (error) {
//       console.error("Error deleting service:", error);
//     }
//   };

//   // open modal to update
//   const handleUpdate = (service) => {
//     setEditingService(service);
//     setFormData({
//       price_washing: service.price_washing,
//       price_ironing: service.price_ironing,
//       delivery: service.delivery,
//     });
//   };

//   // handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // save update
//   const handleSave = async () => {
//     try {
//       const res = await axios.put(
//         `http://localhost:3000/update/Newservices/${editingService._id}`,
//         formData
//       );
//       setServices(
//         services.map((s) => (s._id === editingService._id ? res.data : s))
//       );
//       setEditingService(null);
//     } catch (error) {
//       console.error("Error updating service:", error);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Our Laundry Services
//       </h1>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {services.length > 0 ? (
//           services.map((service) => (
//             <div
//               key={service._id}
//               className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                 Service #{service._id.slice(-4)}
//               </h2>

//               <p className="text-gray-600">
//                 <span className="font-medium">Washing:</span> $
//                 {service.price_washing}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-medium">Ironing:</span> $
//                 {service.price_ironing}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-medium">Delivery:</span> $
//                 {service.delivery}
//               </p>

//               <div className="flex justify-between mt-5">
//                 <button
//                   onClick={() => handleUpdate(service)}
//                   className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={() => handleDelete(service._id)}
//                   className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-3 text-center text-gray-500">
//             No services found.
//           </p>
//         )}
//       </div>

//       {/* Update Modal */}
//       {editingService && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl shadow-lg p-6 w-96 animate-fadeIn">
//             <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
//               Update Service
//             </h2>

//             <div className="space-y-4">
//               <input
//                 type="number"
//                 name="price_washing"
//                 value={formData.price_washing}
//                 onChange={handleChange}
//                 placeholder="Washing Price"
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               />
//               <input
//                 type="number"
//                 name="price_ironing"
//                 value={formData.price_ironing}
//                 onChange={handleChange}
//                 placeholder="Ironing Price"
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               />
//               <input
//                 type="number"
//                 name="delivery"
//                 value={formData.delivery}
//                 onChange={handleChange}
//                 placeholder="Delivery Price"
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               />
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setEditingService(null)}
//                 className="px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function UpdatePrice() {
    const [washing, setwashing] = useState("");
    const [ironing, setironing] = useState("");
    const [delivery, setdelivery] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const handleReadSingle = () => {
        axios.get(`http://localhost:3000/readSingle/Newservices/${params.id}`)
            .then((res) => {
                setwashing(res.data.price_washing);
                setironing(res.data.price_ironing);
                setdelivery(res.data.delivery);
            })
            .catch((err) => console.error("Error fetching service:", err));
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/update/Newservices/${params.id}`, {
            price_washing: Number(washing),
            price_ironing: Number(ironing),
            delivery: Number(delivery)
        })
        .then(() => {
            toast.success("Service updated successfully! 🎉");
            setTimeout(() => navigate('/ServiceDisplay'), 2000);
        })
        .catch((err) => {
            toast.error("Error updating service");
            console.error(err);
        });
    };

    useEffect(() => {
        handleReadSingle();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8ffe5] p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
                <h2 className="text-2xl font-bold text-center text-[#06D6A0]">Update Service Prices</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Washing price $</label>
                        <input
                            value={washing}
                            onChange={(e) => setwashing(e.target.value)}
                            type="number"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Ironing price $</label>
                        <input
                            value={ironing}
                            onChange={(e) => setironing(e.target.value)}
                            type="number"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Delivery price $</label>
                        <input
                            value={delivery}
                            onChange={(e) => setdelivery(e.target.value)}
                            type="number"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
                        />
                    </div>
                </div>

                <button
                    onClick={handleUpdate}
                    className="w-full bg-[#06D6A0] hover:bg-[#05c394] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                    Update Service
                </button>

                <ToastContainer position="top-right" autoClose={2000} />
            </div>
        </div>
    );
}

export default UpdatePrice;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useParams, useNavigate } from "react-router-dom";

// export default function UpdateOrder() {
//   const { id } = useParams(); // order id
//   const navigate = useNavigate();

//   const [customer, setCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     district: "",
//     neighborhood: "",
//   });

//   const [service, setService] = useState({
//     washing: false,
//     ironing: false,
//     washKg: 0,
//     ironKg: 0,
//   });

//   const [total, setTotal] = useState(0);

//   // Fetch single order data
//   const fetchOrder = async () => {
//     try {
//       const res = await axios.get(`http://localhost:3000/orders/${id}`);
//       setCustomer(res.data.customer);
//       setService(res.data.service);
//       setTotal(res.data.totalAmount);
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Could not fetch order data",
//       });
//     }
//   };

//   useEffect(() => {
//     fetchOrder();
//   }, []);

//   // Calculate total when service changes
//   useEffect(() => {
//     let totalAmount = 0;
//     if (service.washing) totalAmount += service.washKg * 5;
//     if (service.ironing) totalAmount += service.ironKg * 2;
//     setTotal(totalAmount);
//   }, [service]);

//   // Handle input changes
//   const handleChangeCustomer = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const handleChangeService = (e) => {
//     const { name, value, type, checked } = e.target;
//     setService({
//       ...service,
//       [name]: type === "checkbox" ? checked : Number(value),
//     });
//   };

//   // Submit update
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:3000/orders/${id}`, {
//         customer,
//         service,
//       });

//       Swal.fire({
//         icon: "success",
//         title: "Updated!",
//         text: `Order updated successfully. Total: $${total}`,
//       }).then(() => {
//         navigate("/OrderDisplay"); // dib ugu celiyo list
//       });
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Could not update order",
//       });
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center">Update Order</h2>

//       <form onSubmit={handleUpdate} className="space-y-4">
//         <div>
//           <h3 className="font-semibold mb-2">Customer Information</h3>
//           {["name", "email", "phone", "district", "neighborhood"].map((field) => (
//             <input
//               key={field}
//               name={field}
//               value={customer[field]}
//               onChange={handleChangeCustomer}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               className="w-full p-2 border rounded mb-2"
//               required
//             />
//           ))}
//         </div>

//         <div>
//           <h3 className="font-semibold mb-2">Select Services</h3>

//           <label className="flex items-center mb-2">
//             <input
//               type="checkbox"
//               name="washing"
//               checked={service.washing}
//               onChange={handleChangeService}
//               className="mr-2"
//             />
//             Washing ($5/kg)
//           </label>
//           {service.washing && (
//             <input
//               type="number"
//               name="washKg"
//               value={service.washKg}
//               onChange={handleChangeService}
//               placeholder="Enter kg for washing"
//               className="w-full p-2 border rounded mb-2"
//               min="0"
//             />
//           )}

//           <label className="flex items-center mb-2">
//             <input
//               type="checkbox"
//               name="ironing"
//               checked={service.ironing}
//               onChange={handleChangeService}
//               className="mr-2"
//             />
//             Ironing ($2/kg)
//           </label>
//           {service.ironing && (
//             <input
//               type="number"
//               name="ironKg"
//               value={service.ironKg}
//               onChange={handleChangeService}
//               placeholder="Enter kg for ironing"
//               className="w-full p-2 border rounded mb-2"
//               min="0"
//             />
//           )}
//         </div>

//         <div className="text-xl font-bold text-right">
//           Total: <span className="text-green-600">${total}</span>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//         >
//           Update Order
//         </button>
//       </form>
//     </div>
//   );
// }

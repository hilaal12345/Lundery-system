// import { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Dashboard from "../pages/Dashboard";
// import { Link } from "react-router-dom";

// function CustomerOrder() {
//   const [data, setData] = useState([]);

//   // Read orders from backend
//   const handleReadData = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/orders");
//       setData(res.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Could not fetch orders",
//       });
//     }
//   };

//   useEffect(() => {
//     handleReadData();
//   }, []);

//   // Delete order
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/orders/${id}`);
//       Swal.fire({
//         icon: "success",
//         title: "Deleted!",
//         text: "Order deleted successfully",
//         showConfirmButton: true,
//       });
//       handleReadData(); // refresh list
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Could not delete order",
//       });
//     }
//   };

//   return (
//     <div className="flex gap-10">
//       <Dashboard />
//       <div className="p-8 bg-gray-50 w-full min-h-screen">
//         <h2 className="text-3xl font-bold mb-4">Orders List</h2>

//         {data.length === 0 && (
//           <div className="text-center p-4 bg-yellow-100 rounded">
//             No orders found.
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white p-4 rounded-lg shadow-md relative"
//             >
//               <div className="mb-2 font-bold text-lg">{order.customer.name}</div>
//               <p>
//                 <strong>Email:</strong> {order.customer.email}
//               </p>
//               <p>
//                 <strong>Phone:</strong> {order.customer.phone}
//               </p>
//               <p>
//                 <strong>District:</strong> {order.customer.district}
//               </p>
//               <p>
//                 <strong>Neighborhood:</strong> {order.customer.neighborhood}
//               </p>
//               <p>
//                 <strong>Services:</strong>{" "}
//                 {order.service.washing && `Washing: ${order.service.washKg}kg `}
//                 {order.service.ironing && `Ironing: ${order.service.ironKg}kg`}
//               </p>
//               <p>
//                 <strong>Total:</strong> ${order.totalAmount}
//               </p>
//               <p>
//                 <strong>Date:</strong>{" "}
//                 {new Date(order.createdAt).toLocaleString()}
//               </p>

//               <button
//                 onClick={() => handleDelete(order._id)}
//                 className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//               >
//               {/* <Link to={`/UpdateOrder/${order._id}`}><button className="text-green-500 mt-2 text-xl">
//                   <i className="fa-solid fa-pen-to-square"></i>
//                 </button></Link> */}
//                 <i className="fa-solid fa-trash text-xl"></i>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerOrder;

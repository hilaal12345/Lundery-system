// import { useEffect, useState } from "react";
// import axios from "axios";

// function AdminCustomerStats() {
//   const [customers, setCustomers] = useState([]);

//   const fetchCustomerSummary = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/admin/customers-summary");
//       setCustomers(res.data);
//     } catch (error) {
//       console.error("Failed to fetch customer summary", error);
//     }
//   };

//   useEffect(() => {
//     fetchCustomerSummary();
//   }, []);

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Customer Orders & Spending</h2>

//       <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="py-3 px-6 text-left font-semibold">#</th>
//             <th className="py-3 px-6 text-left font-semibold">Customer Name</th>
//             <th className="py-3 px-6 text-left font-semibold">Email</th>
//             <th className="py-3 px-6 text-left font-semibold">Phone</th>
//             <th className="py-3 px-6 text-left font-semibold">Total Orders</th>
//             <th className="py-3 px-6 text-left font-semibold">Total Spent ($)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((c, index) => (
//             <tr key={c._id._id} className="border-b hover:bg-gray-100">
//               <td className="py-3 px-6">{index + 1}</td>
//               <td className="py-3 px-6">{c._id.name}</td>
//               <td className="py-3 px-6">{c._id.email}</td>
//               <td className="py-3 px-6">{c._id.phone}</td>
//               <td className="py-3 px-6">{c.totalOrders}</td>
//               <td className="py-3 px-6">{c.totalSpent.toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminCustomerStats;

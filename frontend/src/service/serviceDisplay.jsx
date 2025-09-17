// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // // import Dashboard from "../pages/Dashboard";
// // import { toast } from "react-toastify";

// // function ServiceDisplayOne() {
// //   const [data, setData] = useState([]);

// //   const handleReadData = () => {
// //     axios.post("http://localhost:3000/read/service").then((res) => {
// //       setData(res.data);
// //     });
// //   };

// //   useEffect(() => {
// //     handleReadData();
// //   }, []);

// //   const handleDelete = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:3000/delete/service/${id}`);
// //       toast.success("Service deleted successfully!");
// //       handleReadData();
// //     } catch (error) {
// //       console.error("Delete failed:", error);
// //       toast.error("Failed to delete service");
// //     }
// //   };

// //   return (
// //     <div className="flex">
// //       {/* <Dashboard /> */}
// //       <div className="p-8 bg-gray-50 min-h-screen">
// //         <h2 className="text-3xl font-bold text-gray-800 mb-6">Service List</h2>

// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
// //             <thead className="bg-gray-200">
// //               <tr>
// //                 <th className="py-3 px-6 text-left text-gray-600 font-semibold">
// //                   #
// //                 </th>
// //                 <th className="py-3 px-6 text-left text-gray-600 font-semibold">
// //                   Service Name
// //                 </th>
// //                 <th className="py-3 px-6 text-left text-gray-600 font-semibold">
// //                   Description
// //                 </th>
// //                 <th className="py-3 px-6 text-left text-gray-600 font-semibold">
// //                   Price
// //                 </th>
// //                 <th className="py-3 px-6 text-left text-gray-600 font-semibold">
// //                   Kg
// //                 </th>
// //                 <th className="py-3 px-6 text-left text-gray-600 font-semibold">
// //                   Category
// //                 </th>
// //                 <th className="py-3 px-6 text-left text-gray-600 font-semibold">
// //                   Status
// //                 </th>
// //                 <th className="py-3 px-6 text-left text-gray-600 font-semibold">
// //                   Action
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {data.map((items) => (
// //                 <tr
// //                   key={items._id}
// //                   className="border-b hover:bg-gray-100 transition"
// //                 >
// //                   <td className="py-3 px-4">{items.prId}</td>
// //                   <td className="py-3 px-4">{items.name}</td>
// //                   <td className="py-3 px-4">{items.desc}</td>
// //                   <td className="py-3 px-4">{items.price}</td>
// //                   <td className="py-3 px-4">{items.kg}</td>
// //                   <td className="py-3 px-4">{items.category}</td>
// //                   <td className="py-3 px-4">
// //                     <span
// //                       className={`${
// //                         items.status === "Active"
// //                           ? "text-green-600"
// //                           : "text-red-500"
// //                       } font-semibold`}
// //                     >
// //                       {items.status}
// //                     </span>
// //                   </td>
// //                   <td className="py-3 px-4 flex gap-3">
// //                     <Link to={`/UpdateService/${items._id}`}>
// //                       <button className="text-green-500 mt-2 text-xl">
// //                         <i className="fa-solid fa-pen-to-square"></i>
// //                       </button>
// //                     </Link>

// //                     <button
// //                       onClick={() => handleDelete(items._id)}
// //                       className="text-red-500 mt-2 text-xl"
// //                     >
// //                       <i className="fa-solid fa-trash"></i>
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ServiceDisplayOne;







// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// function ServiceDisplayOne() {
//   const [data, setData] = useState([]);

//   // Fetch services
//   const handleReadData = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/read/service");
//       setData(res.data);
//     } catch (error) {
//       console.error("Failed to fetch services:", error);
//       toast.error("Failed to fetch services");
//     }
//   };

//   useEffect(() => {
//     handleReadData();
//   }, []);

//   // Delete service
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/delete/service/${id}`);
//       toast.success("Service deleted successfully!");
//       handleReadData();
//     } catch (error) {
//       console.error("Delete failed:", error);
//       toast.error("Failed to delete service");
//     }
//   };

//   return (
//     <div className="flex">
//       <div className="p-8 bg-gray-50 min-h-screen">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Service List</h2>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="py-3 px-6 text-left font-semibold">#</th>
//                 <th className="py-3 px-6 text-left font-semibold">Name</th>
//                 <th className="py-3 px-6 text-left font-semibold">Description</th>
//                 <th className="py-3 px-6 text-left font-semibold">Price Washing</th>
//                 <th className="py-3 px-6 text-left font-semibold">Price Ironing</th>
//                 <th className="py-3 px-6 text-left font-semibold">Kg</th>
//                 <th className="py-3 px-6 text-left font-semibold">Category</th>
//                 <th className="py-3 px-6 text-left font-semibold">Delivery Fee</th>
//                 <th className="py-3 px-6 text-left font-semibold">Total Price</th>
//                 <th className="py-3 px-6 text-left font-semibold">Status</th>
//                 <th className="py-3 px-6 text-left font-semibold">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item._id} className="border-b hover:bg-gray-100 transition">
//                   <td className="py-3 px-4">{item.prId}</td>
//                   <td className="py-3 px-4">{item.name}</td>
//                   <td className="py-3 px-4">{item.desc}</td>
//                   <td className="py-3 px-4">{item.price_washing}</td>
//                   <td className="py-3 px-4">{item.price_ironing}</td>
//                   <td className="py-3 px-4">{item.kg}</td>
//                   <td className="py-3 px-4">{item.category}</td>
//                   <td className="py-3 px-4">{item.deliveryFee}</td>
//                   <td className="py-3 px-4">{item.totalPrice}</td>
//                   <td className="py-3 px-4">
//                     <span
//                       className={`${
//                         item.status === "Active" ? "text-green-600" : "text-red-500"
//                       } font-semibold`}
//                     >
//                       {item.status}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4 flex gap-3">
//                     <Link to={`/UpdateService/${item._id}`}>
//                       <button className="text-green-500 mt-2 text-xl">
//                         <i className="fa-solid fa-pen-to-square"></i>
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(item._id)}
//                       className="text-red-500 mt-2 text-xl"
//                     >
//                       <i className="fa-solid fa-trash"></i>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceDisplayOne;

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ServiceDisplay() {
  const [services, setServices] = useState([]);

  // fetch services from backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/read/Newservices")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <div className="p-10 min-h-screen bg-[#f8ffe5]">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-[#06D6A0] drop-shadow-md">
        ✨ Our Laundry Services ✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.length > 0 ? (
          services.map((service) => (
            <div
              key={service._id}
              className="relative bg-white rounded-2xl shadow-lg p-6 border-t-8 border-[#06D6A0] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Service ID */}
              <h2 className="text-2xl font-bold text-[#06D6A0]  mb-4">
               Service Price
              </h2>

              {/* Prices */}
              <p className="text-gray-700 font-semibold mb-2 text-2xl">
                <span className="font-medium text-[#06D6A0] text-2xl ">Washing:</span> ${service.price_washing}
              </p>
              <p className="text-gray-700 mb-2  font-semibold text-2xl">
                <span className="font-medium text-[#06D6A0] ">Ironing:</span> ${service.price_ironing}
              </p>
              <p className="text-gray-700 mb-4 font-semibold  text-2xl">
                <span className="font-medium text-[#06D6A0]">Delivery:</span> ${service.delivery}
              </p>

              {/* Buttons */}
              <div className="flex justify-center mt-6">
                <Link to={`/UpdateService/${service._id}`}>
                  <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#06D6A0] to-[#06b6d4] text-white font-semibold hover:opacity-90 transition shadow-md">
                    Update Service
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500 text-lg">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
}

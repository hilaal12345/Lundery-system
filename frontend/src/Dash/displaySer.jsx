// import { useEffect, useState } from "react";
// import axios from "axios";


// function ServiceDisplay() {
//   const [data, setData] = useState([]);


//   const handleReadData = () => {
//         axios.post("http://localhost:3000/orders").then((res) => {
//             setData(res.data)
//         })
//     }

//   useEffect(() => {
//     handleReadData
//   }, []);

//   const handleDelete = (id) => [
//         axios.delete(`http://localhost:3000/delete/product/${id}`).then(() => {
//             alert("succes delete")
//             handleReadData()
//         })
//     ]

//   return <>
    
//       <div className="p-8 bg-gray-50 w-full min-h-screen">
//         <h2 className="text-3xl font-bold mb-4">Orders List</h2>
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-2">#</th>
//               <th className="p-2">Name</th>
//               <th className="p-2">Email</th>
//               <th className="p-2">phone</th>
//               <th className="p-2">District</th>
//               <th className="p-2">Village</th>
//               <th className="p-2">Services</th>
//               <th className="p-2">Total</th>
//               <th className="p-2">Action</th>

//             </tr>
//           </thead>
//           <tbody>
//             {data.map((order, i) => (
//               <tr key={i}>
//                 <td className="p-2">{i+1}</td>
//                 <td className="p-2 text-center">{order.customer.name}</td>
//                 <td className="p-2 text-center">{order.customer.email}</td>
//                 <td className="p-2 text-center">{order.customer.phone}</td>
//                 <td className="p-2 text-center">{order.customer.district}</td>
//                 <td className="p-2 text-center">{order.customer.village}</td>
//                 <td className="p-2 text-center">
//                   {order.service.washing && `Washing: ${order.service.washKg}kg `} 
//                   {order.service.ironing && `Ironing: ${order.service.ironKg}kg`}
//                 </td>

//                 <td className="p-2 text-center"></td>
//                 <td onClick={() => handleDelete(items._id)}  className="p-2 text-center"><i className="fa-solid fa-trash text-red-500 text-2xl"></i></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
  
//  </>
// }

// export default ServiceDisplay;

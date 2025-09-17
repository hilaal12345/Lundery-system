
// import { useState } from "react";
// import axios from "axios";

// export default function AddServiceForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     desc: "",
//     price: "",
//     kg: "",
//     category: "All",
//     status: "Active",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3000/create/service", formData);
//       setMessage("Service added successfully!");
//       setFormData({
//         name: "",
//         desc: "",
//         price: "",
//         kg: "",
//         category: "All",
//         status: "Active",
//       });
//     } catch (error) {
//       console.error(error);
//       setMessage("Failed to add service. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
//       <h2 className="text-2xl font-bold mb-4">Add New Service</h2>

//       {message && <p className="mb-4 text-green-600">{message}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
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

//         <div>
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="desc"
//             value={formData.desc}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Price ($)</label>
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

//         <button
//           type="submit"
//           className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
//         >
//           Add Service
//         </button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import axios from "axios";

export default function AddServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price_washing: 0,
    price_ironing: 0,
    kg: 0,
    category: "All",
    status: "Active",
    delivery: "None",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/create/service", formData);
      setMessage("Service added successfully!");
      setFormData({
        name: "",
        desc: "",
        price_washing: 0,
        price_ironing: 0,
        kg: 0,
        category: "All",
        status: "Active",
        delivery: "None",
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to add service. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Service Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Price Washing ($)</label>
          <input
            type="number"
            name="price_washing"
            value={formData.price_washing}
            onChange={handleChange}
            min="0"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Price Ironing ($)</label>
          <input
            type="number"
            name="price_ironing"
            value={formData.price_ironing}
            onChange={handleChange}
            min="0"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Kg</label>
          <input
            type="number"
            name="kg"
            value={formData.kg}
            onChange={handleChange}
            min="0"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Washing">Washing</option>
            <option value="Ironing">Ironing</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
            <option value="All">All</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Delivery</label>
          <select
            name="delivery"
            value={formData.delivery}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="None">None</option>
            <option value="Pickup">Pickup</option>
            <option value="Dropoff">Dropoff</option>
            <option value="Both">Both</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}

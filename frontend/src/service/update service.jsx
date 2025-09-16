import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateService() {
  const { id } = useParams(); // qaado ID-ga URL ka
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    kg: "",
    category: "All",
    status: "Active",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch xogtii hore
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/service/${id}`);
        setFormData({
          name: res.data.name || "",
          desc: res.data.desc || "",
          price: res.data.price || "",
          kg: res.data.kg || "",
          category: res.data.category || "All",
          status: res.data.status || "Active",
        });
      } catch (error) {
        console.error("Failed to fetch service:", error);
        setMessage("Failed to load service data.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchService();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/service/${id}`, formData);
      setMessage("✅ Service updated successfully!");
      setTimeout(() => navigate("/services"), 1500); // dib ugu laabo services page
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to update service. Please try again.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading service data...</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Service</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service Name */}
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

        {/* Description */}
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700">Price (£)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Kg */}
        <div>
          <label className="block text-gray-700">Kg</label>
          <input
            type="number"
            name="kg"
            value={formData.kg}
            onChange={handleChange}
            min="0"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Category */}
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

        {/* Status */}
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

        {/* Submit */}
        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
        >
          Update Service
        </button>
      </form>
    </div>
  );
}

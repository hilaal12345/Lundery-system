import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

export default function NEWOrdersDisplay() {
  const [orders, setOrders] = useState([]);

  // Fetch all orders from backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/read/Order")
      .then((res) => {
        // Sort orders - latest first
        const sorted = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setOrders(sorted);
      })
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  // Delete order
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/Order/${id}`);
      setOrders(orders.filter((order) => order._id !== id));
      toast.success("Order deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error deleting order");
    }
  };

  return (
    <div className="p-8 bg-[#f8ffe5] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#06D6A0]">
        All Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {orders.map((order) => (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Header with order number */}
                <div className="bg-[#06D6A0] text-white py-3 px-4 text-center font-bold text-lg">
                  Order #{order.orderNumber}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {order.customer.name}
                  </h2>

                  {/* Date */}
                  <p className="mb-1 text-sm text-gray-600">
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(order.createdAt).toLocaleString()}
                  </p>

                  {/* Customer Info */}
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {order.customer.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      {order.customer.number}
                    </p>
                    <p>
                      <span className="font-medium">District:</span>{" "}
                      {order.customer.district}
                    </p>
                    <p>
                      <span className="font-medium">Neighborhood:</span>{" "}
                      {order.customer.neighborhood}
                    </p>
                  </div>

                  <hr className="my-3" />

                  {/* Services */}
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>
                      <span className="font-medium">Washing:</span>{" "}
                      {order.services.washing
                        ? `${order.services.kg_washing} kg - $${order.price_washing}`
                        : "No"}
                    </p>
                    <p>
                      <span className="font-medium">Ironing:</span>{" "}
                      {order.services.ironing
                        ? `${order.services.kg_ironing} kg - $${order.price_ironing}`
                        : "No"}
                    </p>
                    <p>
                      <span className="font-medium">Delivery:</span>{" "}
                      {order.delivery} - ${order.delivery_price}
                    </p>
                  </div>

                  {/* Total Price */}
                  <p className="font-bold text-lg text-[#06D6A0] mt-4">
                    Total: ${order.total_price}
                  </p>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
                  >
                    Delete Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

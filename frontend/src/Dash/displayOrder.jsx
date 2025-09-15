
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Dashboard from "../pages/Dashboard";

function OrderDisplay() {
  const [data, setData] = useState([]);

  // Read orders from backend
  const handleReadData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/orders");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not fetch orders",
      });
    }
  };

  useEffect(() => {
    handleReadData();
  }, []);

  // Delete order
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/orders/${id}`);
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Order deleted successfully",
        showConfirmButton: true,
      });
      handleReadData(); // refresh list
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not delete order",
      });
    }
  };

  return (
    <div className="flex gap-10">
      <Dashboard />
      <div className="p-8 bg-gray-50 w-full min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Orders List</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">District</th>
              <th className="p-2">Neighborhood</th>
              <th className="p-2">Services</th>
              <th className="p-2">Total</th>
              <th className="p-2">Date</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((order, i) => (
                <tr key={order._id}>
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2 text-center">{order.customer.name}</td>
                  <td className="p-2 text-center">{order.customer.email}</td>
                  <td className="p-2 text-center">{order.customer.phone}</td>
                  <td className="p-2 text-center">{order.customer.district}</td>
                  <td className="p-2 text-center">{order.customer.neighborhood}</td>
                  <td className="p-2 text-center">
                    {order.service.washing && `Washing: ${order.service.washKg}kg `}
                    {order.service.ironing && `Ironing: ${order.service.ironKg}kg`}
                  </td>
                  <td className="p-2 text-center">${order.totalAmount}</td>
                  <td className="p-2 text-center">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                  <td
                    onClick={() => handleDelete(order._id)}
                    className="p-2 text-center cursor-pointer"
                  >
                    <i className="fa-solid fa-trash text-red-500 text-2xl"></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center p-4">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderDisplay;

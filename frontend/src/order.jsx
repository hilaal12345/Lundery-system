import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function OrderForm() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  
    district: "",
    neighborhood: "",
  });

  const [service, setService] = useState({
    washing: false,
    ironing: false,
    washKg: 0,
    ironKg: 0,
  });

  const [total, setTotal] = useState(0);

  // Xisaabi total marka service isbedelo
  useEffect(() => {
    let totalAmount = 0;
    if (service.washing) totalAmount += service.washKg * 5;
    if (service.ironing) totalAmount += service.ironKg * 2;
    setTotal(totalAmount);
  }, [service]);

  // Customer input change
  const handleChangeCustomer = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // Service input change
  const handleChangeService = (e) => {
    const { name, value, type, checked } = e.target;
    setService({
      ...service,
      [name]: type === "checkbox" ? checked : Number(value),
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newOrder = { customer, service, totalAmount: total };
      const response = await axios.post("http://localhost:3000/orders", newOrder);

      // SweetAlert guul
      Swal.fire({
        icon: "success",
        title: "Order Created!",
        text: `Total: $${response.data.totalAmount}`,
        showConfirmButton: true,
      });

      // Reset form
      setCustomer({ name: "", email: "", phone: "", district: "", neighborhood: "" });
      setService({ washing: false, ironing: false, washKg: 0, ironKg: 0 });
      setTotal(0);
    } catch (error) {
      console.error(error);

      // SweetAlert error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error creating order!",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Place Your Order</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Customer Info */}
        <div>
          <h3 className="font-semibold mb-2">Customer Information</h3>
          {["name", "email", "phone", "district", "neighborhood"].map((field) => (
            <input
              key={field}
              name={field}
              value={customer[field]}
              onChange={handleChangeCustomer}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full p-2 border rounded mb-2"
              required
            />
          ))}
        </div>

        {/* Service Info */}
        <div>
          <h3 className="font-semibold mb-2">Select Services</h3>

          <label className="flex items-center mb-2">
            <input type="checkbox" name="washing" checked={service.washing} onChange={handleChangeService} className="mr-2" />
            Washing ($5/kg)
          </label>
          {service.washing && (
            <input
              type="number"
              name="washKg"
              value={service.washKg}
              onChange={handleChangeService}
              placeholder="Enter kg for washing"
              className="w-full p-2 border rounded mb-2"
              min="0"
            />
          )}

          <label className="flex items-center mb-2">
            <input type="checkbox" name="ironing" checked={service.ironing} onChange={handleChangeService} className="mr-2" />
            Ironing ($2/kg)
          </label>
          {service.ironing && (
            <input
              type="number"
              name="ironKg"
              value={service.ironKg}
              onChange={handleChangeService}
              placeholder="Enter kg for ironing"
              className="w-full p-2 border rounded mb-2"
              min="0"
            />
          )}
        </div>

        {/* Total */}
        <div className="text-xl font-bold text-right">
          Total: <span className="text-green-600">${total}</span>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Submit Order
        </button>
      </form>
    </div>
  );
}

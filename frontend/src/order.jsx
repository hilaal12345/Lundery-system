
import { useState, useEffect } from "react";
import axios from "axios";

export default function OrderForm() {
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
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

  // Xisaabi total markasta oo service la beddelo
  useEffect(() => {
    let totalAmount = 0;
    if (service.washing) totalAmount += service.washKg * 5;
    if (service.ironing) totalAmount += service.ironKg * 2;
    setTotal(totalAmount);
  }, [service]);

  const handleChangeCustomer = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleChangeService = (e) => {
    const { name, value, type, checked } = e.target;
    setService({
      ...service,
      [name]: type === "checkbox" ? checked : Number(value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/orders", {
        customer,
        service,
      });
      alert("Order Created! Total: $" + response.data.order.totalAmount);
      // Reset form
      setCustomer({
        name: "",
        address: "",
        email: "",
        phone: "",
        district: "",
        neighborhood: "",
      });
      setService({ washing: false, ironing: false, washKg: 0, ironKg: 0 });
    } catch (error) {
      console.error(error);
      alert("Error creating order");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Place Your Order</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Customer Info */}
        <div>
          <h3 className="font-semibold mb-2">Customer Information</h3>
          <input
            name="name"
            value={customer.name}
            onChange={handleChangeCustomer}
            placeholder="Full Name"
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            name="address"
            value={customer.address}
            onChange={handleChangeCustomer}
            placeholder="Address"
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            name="email"
            value={customer.email}
            onChange={handleChangeCustomer}
            placeholder="Email"
            type="email"
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            name="phone"
            value={customer.phone}
            onChange={handleChangeCustomer}
            placeholder="Phone"
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            name="district"
            value={customer.district}
            onChange={handleChangeCustomer}
            placeholder="District"
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            name="neighborhood"
            value={customer.neighborhood}
            onChange={handleChangeCustomer}
            placeholder="Neighborhood"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Service Info */}
        <div>
          <h3 className="font-semibold mb-2">Select Services</h3>

          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="washing"
              checked={service.washing}
              onChange={handleChangeService}
              className="mr-2"
            />
            Washing
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
            <input
              type="checkbox"
              name="ironing"
              checked={service.ironing}
              onChange={handleChangeService}
              className="mr-2"
            />
            Ironing
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}

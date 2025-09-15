import { useState, useEffect } from "react";
import axios from "axios";

const WASH_PRICE = 5;
const IRON_PRICE = 2;

function OrderForm() {
  // States gooni gooni ah
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");
  const [washing, setWashing] = useState(false);
  const [ironing, setIroning] = useState(false);
  const [washKg, setWashKg] = useState(0);
  const [ironKg, setIronKg] = useState(0);

  const [total, setTotal] = useState(0);

  // Live total calculation
 useEffect(() => {
  const washValue = washing ? (Number(washKg) || 0) : 0;
  const ironValue = ironing ? (Number(ironKg) || 0) : 0;
  setTotal(washValue * WASH_PRICE + ironValue * IRON_PRICE);
}, [washing, ironing, washKg, ironKg]);


  // Submit order
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/orders", {
        customer: { name, address, email, phone, district, village },
        service: { washing, ironing, washKg, ironKg },
      });
      alert("Order Created! Total: $" + res.data.totalAmount);
    } catch (err) {
      console.error(err);
      alert("Error creating order");
    }
  };

   

  return <>
    
    <form  className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Create Order</h2>

      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
      <input type="text" placeholder="District" value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
      <input type="text" placeholder="Neighborhood" value={village} onChange={(e) => setVillage(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />

      <div className="flex justify-between gap-4">
        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={washing} onChange={(e) => setWashing(e.target.checked)} />
          <label>Washing</label>
          <input type="number" placeholder="KG" value={washKg} onChange={(e) => setWashKg(Number(e.target.value))} className="w-20 p-1 border border-gray-300 rounded" />
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={ironing} onChange={(e) => setIroning(e.target.checked)}  />
          <label>Ironing</label>
          <input type="number" placeholder="KG" value={ironKg} onChange={(e) => setIronKg(Number(e.target.value))} className="w-20 p-1 border border-gray-300 rounded" />
        </div>
      </div>

      <div className="text-lg font-bold">Total: ${total}</div>

      <button onClick={handleSubmit} type="text" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit Order</button>
    </form>
  </>
}

export default OrderForm;

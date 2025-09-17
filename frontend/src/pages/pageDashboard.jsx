import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState({
    customers: 0,
    admins: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    axios.get("http://localhost:3000/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Customers</h2>
          <p className="text-3xl font-bold text-green-600">{stats.customers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Admins</h2>
          <p className="text-3xl font-bold text-blue-600">{stats.admins}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Orders</h2>
          <p className="text-3xl font-bold text-purple-600">{stats.orders}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold text-orange-600">${stats.revenue}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

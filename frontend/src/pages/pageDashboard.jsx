import { useEffect, useState } from "react";
import axios from "axios";
import { Users, UserCog, ShoppingCart, DollarSign } from "lucide-react";

function Dash() {
  const [stats, setStats] = useState({
    customers: 0,
    admins: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  const cards = [
    {
      title: "Customers",
      value: stats.customers,
      icon: <Users className="h-8 w-8 text-green-600" />,
      bg: "bg-green-100",
      change: "+2 this week",
    },
    {
      title: "Admins",
      value: stats.admins,
      icon: <UserCog className="h-8 w-8 text-green-600" />,
      bg: "bg-green-100",
      change: "+1 today",
    },
    {
      title: "Orders",
      value: stats.orders,
      icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
      bg: "bg-green-100",
      change: "+5 this month",
    },
    {
      title: "Revenue",
      value: `$${stats.revenue}`,
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      bg: "bg-green-100",
      change: "+$200 today",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#06D6A0] to-[#1B9AAA] p-8">
      <h1 className="text-4xl font-extrabold text-white mb-10">📊 Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-between hover:scale-105 transition-transform"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-600">
                {card.title}
              </h2>
              <p className="text-5xl font-extrabold text-gray-900">
                {card.value}
              </p>
              <p className="text-green-600 text-sm mt-2">{card.change}</p>
            </div>
            <div className={`${card.bg} p-4 rounded-full shadow-inner`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dash;

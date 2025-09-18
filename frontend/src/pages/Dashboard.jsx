import { Link } from "react-router-dom";

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("admin");
  };

  return (
    <div className="w-64 min-h-screen p-6 shadow-xl bg-gradient-to-b from-[#06D6A0] to-[#1B9AAA] text-white">
      <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
        Dashboard
      </h2>
      <ul className="flex flex-col gap-4">
        <Link to="/dash">
          <li className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300 shadow-md">
            <i className="fa-solid fa-gauge text-xl"></i>
            <span className="text-lg font-medium">Dashboard</span>
          </li>
        </Link>

        <Link to="/ServiceDisplay">
          <li className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300 shadow-md">
            <i className="fa-brands fa-product-hunt text-xl"></i>
            <span className="text-lg font-medium">Service</span>
          </li>
        </Link>

        <Link to="/CustomerDisplay">
          <li className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300 shadow-md">
            <i className="fa-solid fa-user text-xl"></i>
            <span className="text-lg font-medium">Customer</span>
          </li>
        </Link>

        <Link to="/AdminDisplay">
          <li className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300 shadow-md">
            <i className="fa-solid fa-users-gear text-xl"></i>
            <span className="text-lg font-medium">Admin</span>
          </li>
        </Link>

        <Link to="/OrderDisplay">
          <li className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300 shadow-md">
            <i className="fa-solid fa-receipt text-xl"></i>
            <span className="text-lg font-medium">Order</span>
          </li>
        </Link>

        <Link to="/login">
          <li
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-lg bg-red-500/80 hover:bg-red-600 transition duration-300 shadow-md"
          >
            <i className="fa-solid fa-right-from-bracket text-xl"></i>
            <span className="text-lg font-medium">Logout</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Dashboard;

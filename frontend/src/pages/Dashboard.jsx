
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="w-64 bg-blue-500 text-white  min-h-screen p-6 shadow-md">
   <h2 className="text-2xl font-bold mb-6 text-white">Dashboard</h2> 
      <ul className="flex flex-col gap-3">
        {/* <Link to="/dashboard"> <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Dashboard</li></Link> */}
        <Link to="/ServiceDisplay"><li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"> <i className="fa-brands fa-product-hunt text-xl"></i>Service</li></Link>        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"><i className="fa-solid fa-user text-xl"></i>Customer</li>
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"><i className="fa-solid fa-compass text-xl"></i>Order</li>
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"><i className="fa-solid fa-compass text-xl"></i>Add Order</li>
        {/* <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Reports</li>
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Setting</li> */}
      </ul>
    </div>
  );
}

export default Dashboard;

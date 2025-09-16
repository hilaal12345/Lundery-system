
import { Link } from "react-router-dom";
function Dashboard() {
  const handleLogout=()=>{
    localStorage.removeItem("admin")
  }
  return (
    <div className="w-64 bg-blue-500 text-white  min-h-screen p-6 shadow-md">
   <h2 className="text-2xl font-bold mb-6 text-white">Dashboard</h2> 
      <ul className="flex flex-col gap-3">
        {/* <Link to="/dashboard"> <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Dashboard</li></Link> */}
        <Link to="/ServiceDisplay"><li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"> <i className="fa-brands fa-product-hunt text-xl"></i>Service</li></Link>       
        <Link to="/Add Service"><li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"> <i className="fa-brands fa-product-hunt text-xl"></i>Add Service</li></Link>       
        <Link to={"/CustomerDisplay"}><li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"><i className="fa-solid fa-user text-xl"></i>Customer</li></Link>
        <Link to={"/AdminDisplay"}><li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"><i className="fa-solid fa-user text-xl"></i>Admin</li></Link>
       <Link to="/OrderDisplay"> <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"><i className="fa-solid fa-compass text-xl"></i>Order</li></Link>
       <Link to={"/OrderForm"}><li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"><i className="fa-solid fa-compass text-xl"></i>Add Order</li></Link>
        {/* <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Reports</li> */}
      <Link to={"/login"}><li onClick={handleLogout} className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition"><i className="fa-solid fa-compass text-xl"></i>Logout</li></Link> 
      </ul>
    </div>
  );
}

export default Dashboard;

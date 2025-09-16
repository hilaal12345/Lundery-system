import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
// import { toast } from "react-toastify";

function CustomerDisplay() {
  const [data, setData] = useState([]);

  const handleReadData = () => {
    axios.get("http://localhost:3000/readd/customer").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    handleReadData();
  }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/delete/customer/${id}`);
//       toast.success("Service deleted successfully!");
//       handleReadData();
//     } catch (error) {
//       console.error("Delete failed:", error);
//       toast.error("Failed to delete service");
//     }
//   };

  return (
    <div className="flex">
      <Dashboard />
      <div className="p-8 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Customers Registration</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">
                  #
                </th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">
                  Customer Name
                </th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">
                  Phone
                </th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((items) => (
                <tr
                  key={items._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4">{items.prId}</td>
                  <td className="py-3 px-4">{items.name}</td>
                  <td className="py-3 px-4">{items.email}</td>
                  <td className="py-3 px-4">{items.phone}</td>
                  
                  {/* <td className="py-3 px-4 flex gap-3">
                    <Link to={`/UpdateService/${items._id}`}>
                      <button className="text-green-500 mt-2 text-xl">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(items._id)}
                      className="text-red-500 mt-2 text-xl"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerDisplay;

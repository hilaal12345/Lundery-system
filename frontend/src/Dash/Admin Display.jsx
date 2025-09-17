import axios from "axios";
import { useEffect, useState } from "react";

function AdminDisplay() {
  const [data, setData] = useState([]);

  const handleReadData = () => {
    axios.get("http://localhost:3000/read/admin").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    handleReadData();
  }, []);

  return (
    <div className="flex">
      <div
        className="p-8 min-h-screen w-full"
        style={{ backgroundColor: "#f8ffe5" }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Admins</h2>

        <div className="overflow-x-auto shadow-lg rounded-2xl">
          <table className="min-w-full bg-white rounded-2xl overflow-hidden">
            <thead style={{ backgroundColor: "#06D6A0" }}>
              <tr>
                <th className="py-4 px-6 text-left text-white font-semibold">#</th>
                <th className="py-4 px-6 text-left text-white font-semibold">
                  Admin Name
                </th>
                <th className="py-4 px-6 text-left text-white font-semibold">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr
                  key={items._id}
                  className={`transition ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-[#f8ffe5]`}
                >
                  <td className="py-3 px-6 text-gray-700">{items.prId}</td>
                  <td className="py-3 px-6 text-gray-800 font-medium">
                    {items.name}
                  </td>
                  <td className="py-3 px-6 text-gray-700">{items.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDisplay;

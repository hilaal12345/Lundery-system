import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("customer");

  const navigate = useNavigate();

  function handleInsert(e) {
    e.preventDefault();
    const url =
      active === "customer"
        ? "http://localhost:3000/create/customer"
        : "http://localhost:3000/create/admin";
    const payload =
      active === "customer"
        ? { name, phone, email, password }
        : { name, email, password };

    axios
      .post(url, payload)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `${active} Registered Successfully!`,
          showConfirmButton: false,
          timer: 1500,
          background: "#f8ffe5",
          color: "#06D6A0",
        });
        navigate("/login");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Invalid email or password",
          background: "#f8ffe5",
          color: "#06D6A0",
        });
      });
  }

  return (
    <div className="min-h-screen grid place-items-center bg-[#f8ffe5] p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActive("customer")}
            className={`px-6 py-2 rounded-2xl font-semibold transition-transform duration-200 transform ${
              active === "customer"
                ? "bg-[#06D6A0] text-white scale-105 shadow-lg"
                : "border-2 border-[#06D6A0] text-[#06D6A0] hover:scale-105"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setActive("admin")}
            className={`px-6 py-2 rounded-2xl font-semibold transition-transform duration-200 transform ${
              active === "admin"
                ? "bg-[#06D6A0] text-white scale-105 shadow-lg"
                : "border-2 border-[#06D6A0] text-[#06D6A0] hover:scale-105"
            }`}
          >
            Admin
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {active === "customer" ? "Register Customer" : "Register Admin"}
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              {active === "customer" ? "Customer Name" : "Admin Name"}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06D6A0] transition duration-300 shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06D6A0] transition duration-300 shadow-sm"
            />
          </div>

          {active === "customer" && (
            <div>
              <label className="block mb-1 font-medium text-gray-700">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Enter phone number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06D6A0] transition duration-300 shadow-sm"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06D6A0] transition duration-300 shadow-sm"
            />
          </div>

          <button
            onClick={handleInsert}
            type="submit"
            className="w-full bg-[#06D6A0] text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition-transform duration-200 transform hover:scale-105"
          >
            {active === "customer" ? "Register Customer" : "Register Admin"}
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an email?{" "}
              <a
                href="https://accounts.google.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06D6A0] hover:underline"
              >
                Create Email Account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

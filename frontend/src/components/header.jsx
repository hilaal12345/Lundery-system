import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from './image/logo.jpg';

function Header() {
  const navigate = useNavigate();
  const getCustomer = localStorage.getItem("customer");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("customer");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md px-4 md:px-16 py-2 md:py-4">
      <div className="flex justify-between items-center">
        <img className="w-24 md:w-32 h-24 md:h-32 mx-auto md:mx-0" src={logo} alt="Logo" />

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-emerald-600 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex text-emerald-600 gap-8 text-lg md:text-2xl font-semibold">
          <Link to={"/"}><li className="hover:text-emerald-800 transition">Home</li></Link>
          <Link to={"/about"}><li className="hover:text-emerald-800 transition">About</li></Link>
          <Link to={"/service"}><li className="hover:text-emerald-800 transition">Service</li></Link>
          <Link to={"/contact"}><li className="hover:text-emerald-800 transition">Contact</li></Link>
        </ul>

        {/* Desktop User Actions */}
        <div className="hidden md:flex gap-4">
          {getCustomer ? (
            <>
              <NavLink to={"/profile"}>
                <button className="bg-emerald-700 px-6 md:px-10 text-white font-semibold rounded-lg text-lg md:text-xl py-2 hover:bg-emerald-800 transition">
                  <i className="fa-solid fa-user mr-2"></i> Profile
                </button>
              </NavLink>

              <button
                onClick={handleLogOut}
                className="bg-red-600 px-6 md:px-10 text-white font-semibold rounded-lg text-lg md:text-xl py-2 hover:bg-red-700 transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>
                <button className="bg-emerald-700 px-6 md:px-10 text-white font-semibold rounded-lg text-lg md:text-xl py-2 hover:bg-emerald-800 transition">
                  Login
                </button>
              </NavLink>

              <NavLink to={"/registration"}>
                <button className="bg-emerald-700 px-6 md:px-10 text-white font-semibold rounded-lg text-lg md:text-xl py-2 hover:bg-emerald-800 transition">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 flex flex-col gap-4 text-center text-emerald-600"
          >
            <Link to={"/"} onClick={() => setMenuOpen(false)}><li>Home</li></Link>
            <Link to={"/about"} onClick={() => setMenuOpen(false)}><li>About</li></Link>
            <Link to={"/service"} onClick={() => setMenuOpen(false)}><li>Service</li></Link>
            <Link to={"/contact"} onClick={() => setMenuOpen(false)}><li>Contact</li></Link>

            {getCustomer ? (
              <>
                <NavLink to={"/Profile"} onClick={() => setMenuOpen(false)}><li>Profile</li></NavLink>
                <button onClick={handleLogOut} className="text-left">Log Out</button>
              </>
            ) : (
              <>
                <NavLink to={"/login"} onClick={() => setMenuOpen(false)}><li>Login</li></NavLink>
                <NavLink to={"/registration"} onClick={() => setMenuOpen(false)}><li>Sign Up</li></NavLink>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

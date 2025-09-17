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
    <>
      {/* Fixed Header */}
      <header className="bg-[#06D6A0] shadow-md px-4 md:px-16 py-3 text-[#f8ffe5] fixed w-full z-50">
        <div className="flex justify-between items-center">
          {/* Logo as Circular Icon with Shadow */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img className="w-full h-full object-cover" src={logo} alt="Logo" />
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden text-[#f8ffe5] text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-lg md:text-xl font-semibold">
            <Link to={"/"}><li className="hover:text-white transition">Home</li></Link>
            <Link to={"/about"}><li className="hover:text-white transition">About</li></Link>
            <Link to={"/service"}><li className="hover:text-white transition">Service</li></Link>
            <Link to={"/contact"}><li className="hover:text-white transition">Contact</li></Link>
          </ul>

          {/* Desktop User Actions */}
          <div className="hidden md:flex gap-4">
            {getCustomer ? (
              <>
                <NavLink to={"/OrderForm"}>
                  <button className="bg-[#f8ffe5] text-[#06D6A0] px-6 md:px-10 font-semibold rounded-lg text-lg md:text-xl py-2 hover:bg-white transition">
                    <i className="fa-solid fa-user mr-2"></i> Order Now
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
                  <button className="bg-[#f8ffe5] text-[#06D6A0] px-6 md:px-10 font-semibold rounded-lg text-lg md:text-xl py-2 hover:bg-white transition">
                    Login
                  </button>
                </NavLink>

                <NavLink to={"/registration"}>
                  <button className="bg-[#f8ffe5] text-[#06D6A0] px-6 md:px-10 font-semibold rounded-lg text-lg md:text-xl py-2 hover:bg-white transition">
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
              className="md:hidden mt-2 flex flex-col gap-4 text-center"
            >
              <Link to={"/"} onClick={() => setMenuOpen(false)}><li className="hover:text-white transition">Home</li></Link>
              <Link to={"/about"} onClick={() => setMenuOpen(false)}><li className="hover:text-white transition">About</li></Link>
              <Link to={"/service"} onClick={() => setMenuOpen(false)}><li className="hover:text-white transition">Service</li></Link>
              <Link to={"/contact"} onClick={() => setMenuOpen(false)}><li className="hover:text-white transition">Contact</li></Link>

              {getCustomer ? (
                <>
                  <NavLink to={"/OrderForm"} onClick={() => setMenuOpen(false)}>
                    <li className="hover:text-white transition">Order Now</li>
                  </NavLink>
                  <button onClick={handleLogOut} className="text-left hover:text-white transition">Log Out</button>
                </>
              ) : (
                <>
                  <NavLink to={"/login"} onClick={() => setMenuOpen(false)}>
                    <li className="hover:text-white transition">Login</li>
                  </NavLink>
                  <NavLink to={"/registration"} onClick={() => setMenuOpen(false)}>
                    <li className="hover:text-white transition">Sign Up</li>
                  </NavLink>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-28 md:h-32"></div>
    </>
  );
}

export default Header;

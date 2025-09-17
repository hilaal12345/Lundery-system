// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

// function Service(){
//           return <>
//           <h1>Hello service</h1>
//          <Link to={"/OrderForm"}><button className="bg-red-700 px-12 py-3"> clicl me</button></Link>

          
          
//           </>
// }
// export default Service
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTshirt, FaCogs, FaTruck, FaHandsHelping } from "react-icons/fa";

export default function Service() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f8ffe5] px-6 md:px-20 py-16"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to <span className="text-[#06D6A0]">HSH Laundry</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Fresh, clean, and delivered with care. Affordable and reliable laundry
          services for everyone.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Washing */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <FaTshirt className="text-5xl text-[#06D6A0] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Washing</h3>
          
          <p className="text-gray-600">Sparkling clean wash every time.</p>
        </motion.div>

        {/* Ironing */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <FaCogs className="text-5xl text-[#06D6A0] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ironing</h3>
          
          <p className="text-gray-600">Smooth, wrinkle-free clothes.</p>
        </motion.div>

        {/* Delivery */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <FaTruck className="text-5xl text-[#06D6A0] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Delivery</h3>
          
          <p className="text-gray-600">Fast & safe delivery at your doorstep.</p>
        </motion.div>

        {/* Care */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <FaHandsHelping className="text-5xl text-[#06D6A0] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Care</h3>
         
          <p className="text-gray-600">Special care for every fabric.</p>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <section className="bg-white py-16 px-6 md:px-12 mt-16 rounded-2xl shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#06D6A0]">
            Laundry Service Prices
          </h2>

          {/* Price Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#f8ffe5] p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">Wash & Fold</h3>
              <p className="text-[#06D6A0] text-xl font-bold mt-2">$10</p>
            </div>

            <div className="bg-[#f8ffe5] p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">Ironing</h3>
              <p className="text-[#06D6A0] text-xl font-bold mt-2">$5</p>
            </div>

            <div className="bg-[#f8ffe5] p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">Delivery</h3>
              <p className="text-[#06D6A0] text-xl font-bold mt-2">$2</p>
            </div>
          </div>

          {/* Button */}
      
        </div>
      </section>
    </motion.div>
  );
}

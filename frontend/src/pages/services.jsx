// import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// function Service(){
//           return <>
//           <h1>Hello service</h1>
//          <Link to={"/OrderForm"}><button className="bg-red-700 px-12 py-3"> clicl me</button></Link>

          
          
//           </>
// }
// export default Service
import { motion } from "framer-motion";
import { FaTshirt, FaCogs, FaBoxOpen, FaCheckCircle } from "react-icons/fa";

export default function Service() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50 px-6 md:px-20 py-16"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-gray-800">
          Our <span className="text-emerald-700">Services</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide top-quality laundry services designed to make your life easier.
          Fast, reliable, and affordable solutions for all your laundry needs.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Washing */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <FaTshirt className="text-5xl text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Washing</h3>
          <p className="text-gray-600">
            Get your clothes cleaned with our professional washing service. Fresh and spotless results every time.
          </p>
        </motion.div>

        {/* Ironing */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <FaCogs className="text-5xl text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ironing</h3>
          <p className="text-gray-600">
            Say goodbye to wrinkles with our quick and efficient ironing service.
          </p>
        </motion.div>

        {/* Dry Cleaning */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <FaBoxOpen className="text-5xl text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Dry Cleaning</h3>
          <p className="text-gray-600">
            Premium dry-cleaning service for delicate fabrics and special garments.
          </p>
        </motion.div>

        {/* All-in-One */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <FaCheckCircle className="text-5xl text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">All-in-One</h3>
          <p className="text-gray-600">
            Enjoy a full laundry solution: washing, ironing, and dry cleaning in one convenient package.
          </p>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <section className="bg-white py-16 px-6 md:px-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-emerald-600">
            Laundry Service Prices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            {/* Left: Text */}
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>
                Laundry Lite offers best lowest guaranteed price for their laundry services, which ensures that customers are getting the best deal for their money. We offer discounts for bulk or regular service, as well as price-matching policies to ensure that customers are not overpaying for their laundry needs. This makes laundry services affordable and accessible for everyone in the city.
              </p>
              <p className="mt-4">
                Our all laundry service prices (wash laundry, dry cleaning and ironing) are one of the best competitive, cheapest and affordable in town.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <img
                className="rounded-full shadow-lg w-full md:w-96 object-cover"
                src="https://i.pinimg.com/1200x/6b/83/3c/6b833cba743b0e57a48a37cf86c61d47.jpg"
                alt="Laundry Service"
              />
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">2 x 2 Piece Suit</h3>
              <p className="text-emerald-600 text-xl font-bold mt-2">Price $24</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">20 Shirts on Hangers</h3>
              <p className="text-emerald-600 text-xl font-bold mt-2">Price $5</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">2 Bed Sets (Double/King) <br /> Wash/Dry + Iron</h3>
              <p className="text-emerald-600 text-xl font-bold mt-2">Price $2</p>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-10">
          <Link to="/OrderForm"><button className="bg-emerald-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-emerald-700 transition">
              ADD YOUR ORDER
            </button></Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaTruck, FaLeaf, FaTshirt, FaClock } from "react-icons/fa"

function About() {
  return (
    <>
      <div className="min-h-screen bg-[#f8ffe5]">
        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-[#06D6A0]">LaundryExpress</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We’re more than just a laundry service — we’re your trusted partner in
            saving time and delivering freshness to your wardrobe.
          </motion.p>
        </section>

        {/* About Content (Text + Image) */}
        <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-12">
          {/* Left Side: Text */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#06D6A0]">Who We Are</h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              LaundryExpress is a modern laundry and dry-cleaning service dedicated
              to making your life easier. With years of experience, we combine
              professional care with the convenience of home pickup and delivery.
            </p>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              Our mission is to give you more free time by handling the hassle of
              laundry. Trusted by hundreds of happy customers, we’re proud to be
              your reliable laundry partner.
            </p>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-2xl shadow-lg w-full md:w-4/5 hover:scale-105 transition duration-500"
              src="https://i.pinimg.com/1200x/85/16/96/851696dcf18248fc8c4845124dc9f7bd.jpg"
              alt="Laundry service workers"
            />
          </motion.div>
        </section>

        {/* Mission & Vision Section */}
        <section className="px-6 md:px-20 py-16 bg-white">
          <h2 className="text-3xl font-bold text-center text-[#06D6A0]">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Mission Card */}
            <motion.div
              className="bg-[#f8ffe5] p-8 rounded-2xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-[#06D6A0]">Our Mission</h3>
              <p className="text-gray-700 mt-4 leading-relaxed">
                To provide high-quality laundry services that save you time and
                make your life easier, with reliable pickup and doorstep delivery.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-[#f8ffe5] p-8 rounded-2xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-[#06D6A0]">Our Vision</h3>
              <p className="text-gray-700 mt-4 leading-relaxed">
                To become the most trusted laundry brand by offering innovative,
                eco-friendly, and customer-focused solutions in every community we serve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us / Features Section */}
        <section className="px-6 md:px-20 py-16 bg-[#06D6A0]">
          <h2 className="text-3xl font-bold text-center text-white">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-10 text-center">
            <motion.div
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaTruck className="text-[#06D6A0] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg"> Pickup & Delivery</h3>
              <p className="text-gray-600 mt-2 text-sm">
                We bring convenience to your doorstep with quick and reliable service.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="text-[#06D6A0] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Eco-Friendly Cleaning</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Safe detergents and sustainable practices for a greener tomorrow.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaTshirt className="text-[#06D6A0] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Premium Care</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Your clothes deserve the best treatment — and that’s what we provide.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaClock className="text-[#06D6A0] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">On-Time Delivery</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Fast turnaround so you never have to wait long for fresh clothes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.div
          className="text-center font-semibold space-y-10 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="pt-5 text-2xl font-semibold text-gray-800">
            If you want more information then contact us
          </p>
          <Link to={"/contact"}>
            <button className="bg-[#06D6A0] mt-5 text-2xl font-semibold text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  )
}

export default About

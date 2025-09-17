import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function About() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-emerald-600">LaundryExpress</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Were more than just a laundry service — were your trusted partner in 
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
            <h2 className="text-3xl font-bold text-blue-800">Who We Are</h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              LaundryExpress is a modern laundry and dry-cleaning service dedicated 
              to making your life easier. With years of experience, we combine 
              professional care with the convenience of home pickup and delivery.
            </p>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
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
          <h2 className="text-3xl font-bold text-center text-blue-800">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Mission Card */}
            <motion.div
              className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                To provide high-quality laundry services that save you time and
                make your life easier, with reliable pickup and doorstep delivery.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                To become the most trusted laundry brand by offering innovative, 
                eco-friendly, and customer-focused solutions in every community we serve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.div
          className="text-center font-semibold space-y-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="pt-5 text-2xl font-semibold">
            If you want more information then contact us
          </p>
          <Link to={"/contact"}>
            <button className="bg-emerald-700 mt-5 text-2xl font-semibold text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  )
}

export default About

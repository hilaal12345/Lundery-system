import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8ffe5] to-[#d0f0c0] p-6 md:p-20">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#06D6A0]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact <span className="text-red-600">Us</span>
        </motion.h1>
        <motion.p
          className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We’d love to hear from you. Reach out for any questions, support, or feedback — our team is always here to help!
        </motion.p>
      </section>

      {/* Contact Form + Info */}
      <section className="flex flex-col md:flex-row gap-12">
        
        {/* Left: Form */}
        <motion.div
          className="md:w-2/3 bg-white rounded-2xl shadow-2xl p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#06D6A0] transition duration-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#06D6A0] transition duration-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#06D6A0] transition duration-300 shadow-sm"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-[#06D6A0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          className="md:w-1/3 bg-[#06D6A0] text-white rounded-2xl shadow-2xl p-8 flex flex-col justify-between"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-6 text-[#f8ffe5]">
              You can also reach us through our office or social platforms.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-white text-xl" />
                <div>
                  <span className="block font-semibold text-lg">Phone</span>
                  <p className="text-[#f8ffe5]">+252 61 234 5678</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-white text-xl" />
                <div>
                  <span className="block font-semibold text-lg">Email</span>
                  <a href="mailto:omlasbashir@gmail.com" className="text-[#f8ffe5] hover:underline">
                    omlasbashir@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white text-xl" />
                <div>
                  <span className="block font-semibold text-lg">Address</span>
                  <p className="text-[#f8ffe5]">KM4, Maka Al Mukarama Street, Mogadishu, Somalia</p>
                </div>
              </li>
            </ul>
          </div>

          <motion.a
            href="https://wa.me/252612338427"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-900 flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold mt-6 text-2xl text-white hover:bg-green-800 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp /> ‪+252-612-33-84-27‬
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;

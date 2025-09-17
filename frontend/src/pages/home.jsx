import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="w-full mt-3 ">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-4 md:px-10 py-16">
          {/* Text */}
          <motion.div
            className="max-w-xl text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#06D6A0] leading-tight">
              Fast & Reliable <span className="text-black">Laundry</span> Service
            </h1>
            <p className="text-[#000000] mt-4 text-base sm:text-lg font-light">
              Hassle-free laundry service! We pick up, wash, iron, and deliver your clothes fresh and on time.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to={"/OrderForm"}>
                <motion.button
                  className="text-white bg-[#06D6A0] px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Place Order
                </motion.button>
              </Link>
              <Link to={"/about"}>
                <motion.button
                  className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#06D6A0] font-semibold transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Images */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            <motion.div
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-8 border-[#06D6A0] shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                className="w-full h-full object-cover "
                src="https://i.pinimg.com/736x/6f/3d/86/6f3d869f17093d2adf68d2b2989fdd3b.jpg"
                alt="Laundry Service"
              />
            </motion.div>
            <motion.div
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-8 border-[#f8ffe5] shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/1200x/bb/12/96/bb129643abbe1638d6360a7625e886bb.jpg"
                alt="Laundry Service"
              />
            </motion.div>
          </div>
        </section>

        {/* WhatsApp Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/252619977139"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="flex items-center bg-[#06D6A0] text-white gap-3 px-6 py-3 fixed ml-[600px] rounded-full font-semibold shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={48} />
            </motion.button>
          </a>
        </div>

        {/* Services Section */}
        <section className="px-4 md:px-10 py-16 bg-[#f8ffe5]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#06D6A0]">
            Our Services
          </h2>
          <p className="text-center text-gray-700 mt-2 font-light">
            Quality laundry solutions tailored for you
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {/* Wash & Fold */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <img
                className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg"
                src="https://i.pinimg.com/1200x/bb/cb/17/bbcb1751593689ff83d87a71eb6fcb80.jpg"
                alt="Wash & Fold"
              /> 
              <h3 className="text-xl font-bold text-[#06D6A0] mt-4">Wash & Fold</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Carefully washed, dried, and folded clothes delivered to your door.
              </p>
            </motion.div>

            {/* Ironing */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <img
                className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg"
                src="https://i.pinimg.com/1200x/60/db/f3/60dbf3a3cfe1b6ec05910636c8c58398.jpg"
                alt="Ironing"
              />
              <h3 className="text-xl font-bold text-[#06D6A0] mt-4">Ironing</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Professionally ironed garments for a crisp, clean look.
              </p>
            </motion.div>

            {/* Pickup & Delivery */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <img
                className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg"
                src="https://i.pinimg.com/736x/21/51/a5/2151a5cd4e7d5fad3a08c7d5216c7d5f.jpg"
                alt="Pickup & Delivery"
              />
              <h3 className="text-xl font-bold text-[#06D6A0] mt-4">Pickup & Delivery</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Convenient door-to-door laundry service, always on schedule.
              </p>
            </motion.div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="px-4 md:px-10 py-16 bg-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#06D6A0]">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <motion.div
              className="bg-[#f8ffe5] p-6 rounded-2xl shadow-lg text-center transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-gray-700 italic">
                "Fast and reliable service! My clothes were perfectly cleaned and delivered on time."
              </p>
              <h3 className="mt-4 font-bold text-[#06D6A0]">- Amina H.</h3>
            </motion.div>
            <motion.div
              className="bg-[#f8ffe5] p-6 rounded-2xl shadow-lg text-center transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <p className="text-gray-700 italic">
                "Excellent ironing service! My shirts look crisp and new every time."
              </p>
              <h3 className="mt-4 font-bold text-[#06D6A0]">- Yusuf M.</h3>
            </motion.div>
            <motion.div
              className="bg-[#f8ffe5] p-6 rounded-2xl shadow-lg text-center transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <p className="text-gray-700 italic">
                "Pickup and delivery was super convenient. Highly recommended!"
              </p>
              <h3 className="mt-4 font-bold text-[#06D6A0]">- Fatima S.</h3>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="px-4 md:px-10 py-16 bg-[#e0f7f4]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#06D6A0]">
            Get In Touch
          </h2>
          <p className="text-center text-gray-700 mt-2 font-light">
            We're here to help! Contact us for any queries or service requests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10">
            <div className="text-center">
              <h3 className="font-bold text-lg text-[#06D6A0]">Phone</h3>
              <p className="text-gray-700 mt-2">+252 61 233 84 27</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg text-[#06D6A0]">Email</h3>
              <p className="text-gray-700 mt-2">info@laundryservice.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg text-[#06D6A0]">Address</h3>
              <p className="text-gray-700 mt-2">Mogadishu, Somalia</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;

// import { motion } from "framer-motion";

// function Home() {
//   return (
//     <>
//       <div className="w-screen mt-3 bg-current">
//         {/* Hero Section */}
//         <section className="flex flex-col md:flex-row items-center justify-center gap-20 px-10 py-16">
//           <motion.div
//             className="max-w-xl"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="text-5xl font-extrabold text-white leading-tight">
//               Fast & Reliable{" "}
//               <span className="text-emerald-600">Laundry</span> Service
//             </h2>
//             <p className="text-white mt-4 text-lg">
//               We pick up your clothes, wash them with care, and deliver them
//               back fresh, clean, and on time — hassle-free.
//             </p>
//             <div className="mt-6 flex gap-4">
//               <motion.button
//                 className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get Started
//               </motion.button>
//               <motion.button
//                 className="border border-blue-600 text-emerald-600 px-6 py-3 rounded-lg"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn More
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Images with animation */}
//           <motion.img
//             className="w-80 h-80 rounded-full"
//             src="https://i.pinimg.com/736x/6f/3d/86/6f3d869f17093d2adf68d2b2989fdd3b.jpg"
//             alt="Laundry Service"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           />
//           <motion.img
//             className="w-80 h-80 rounded-full"
//             src="https://i.pinimg.com/1200x/bb/12/96/bb129643abbe1638d6360a7625e886bb.jpg"
//             alt="Laundry Service"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           />
//         </section>

//         {/* Services Section */}
//         <section className="px-10 py-16 bg-white">
//           <h3 className="text-3xl font-bold text-center text-gray-800">
//             Our Services
//           </h3>
//           <div className="grid md:grid-cols-3 gap-8 mt-10">
//             {/* Wash & Fold */}
//             <motion.div
//               className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9 }}
//             >
//               <img
//                 className="rounded-full w-60"
//                 src="https://i.pinimg.com/1200x/bb/cb/17/bbcb1751593689ff83d87a71eb6fcb80.jpg"
//                 alt="Wash & Fold"
//               />
//               <h4 className="text-xl font-semibold text-gray-800">
//                 Wash & Fold
//               </h4>
//               <p className="text-gray-600 mt-2">
//                 We wash, dry, and neatly fold your clothes with care.
//               </p>
//             </motion.div>

//             {/* Ironing */}
//             <motion.div
//               className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <img
//                 className="rounded-full w-60"
//                 src="https://i.pinimg.com/1200x/60/db/f3/60dbf3a3cfe1b6ec05910636c8c58398.jpg"
//                 alt="Ironing"
//               />
//               <h4 className="text-xl font-semibold text-gray-800">Ironing</h4>
//               <p className="text-gray-600 mt-2">
//                 Professionally ironed clothes, ready to wear at any time.
//               </p>
//             </motion.div>

//             {/* Pickup & Delivery */}
//             <motion.div
//               className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <img
//                 className="rounded-full w-60"
//                 src="https://i.pinimg.com/736x/21/51/a5/2151a5cd4e7d5fad3a08c7d5216c7d5f.jpg"
//                 alt="Pickup & Delivery"
//               />
//               <h4 className="text-xl font-semibold text-gray-800">
//                 Pickup & Delivery
//               </h4>
//               <p className="text-gray-600 mt-2">
//                 Convenient pickup and doorstep delivery — always on time.
//               </p>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default Home;



import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="w-full mt-3 bg-current">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-4 md:px-10 py-10 md:py-16">
          {/* Text */}
          <motion.div
            className="max-w-xl text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Fast & Reliable <span className="text-emerald-600">Laundry</span> Service
            </h2>
            <p className="text-white mt-4 text-base sm:text-lg">
              We pick up your clothes, wash them with care, and deliver them back fresh, clean, and on time — hassle-free.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="border border-blue-600 text-emerald-600 px-6 py-3 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            <motion.img
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover"
              src="https://i.pinimg.com/736x/6f/3d/86/6f3d869f17093d2adf68d2b2989fdd3b.jpg"
              alt="Laundry Service"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.img
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover"
              src="https://i.pinimg.com/1200x/bb/12/96/bb129643abbe1638d6360a7625e886bb.jpg"
              alt="Laundry Service"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 md:px-10 py-10 md:py-16 bg-white">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {/* Wash & Fold */}
            <motion.div
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <img
                className="rounded-full w-48 h-48 mx-auto object-cover"
                src="https://i.pinimg.com/1200x/bb/cb/17/bbcb1751593689ff83d87a71eb6fcb80.jpg"
                alt="Wash & Fold"
              />
              <h4 className="text-xl font-semibold text-gray-800 mt-4">Wash & Fold</h4>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                We wash, dry, and neatly fold your clothes with care.
              </p>
            </motion.div>

            {/* Ironing */}
            <motion.div
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                className="rounded-full w-48 h-48 mx-auto object-cover"
                src="https://i.pinimg.com/1200x/60/db/f3/60dbf3a3cfe1b6ec05910636c8c58398.jpg"
                alt="Ironing"
              />
              <h4 className="text-xl font-semibold text-gray-800 mt-4">Ironing</h4>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Professionally ironed clothes, ready to wear at any time.
              </p>
            </motion.div>

            {/* Pickup & Delivery */}
            <motion.div
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                className="rounded-full w-48 h-48 mx-auto object-cover"
                src="https://i.pinimg.com/736x/21/51/a5/2151a5cd4e7d5fad3a08c7d5216c7d5f.jpg"
                alt="Pickup & Delivery"
              />
              <h4 className="text-xl font-semibold text-gray-800 mt-4">Pickup & Delivery</h4>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Convenient pickup and doorstep delivery — always on time.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      
    </>
  );
}

export default Home;


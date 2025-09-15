function Service() {
  return (
    <div className="  min-h-screen bg-gray-50 px-6 md:px-20 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Our <span className="text-emerald-700">Services</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide top-quality laundry services designed to make your life easier. 
          Fast, reliable, and affordable solutions for all your laundry needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Service 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          
          <h3 className="text-xl font-bold text-gray-800 mt-6">Regular Laundry</h3>
          <p className="text-gray-600 mt-3"> High-quality washing, drying, and folding with eco-friendly detergents. </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          
          <h3 className="text-xl font-bold text-gray-800 mt-6">Dry Cleaning</h3>
          <p className="text-gray-600 mt-3">  Professional dry-cleaning for delicate fabrics and formal wear. </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          
          <h3 className="text-xl font-bold text-gray-800 mt-6">Pickup & Delivery</h3>
          <p className="text-gray-600 mt-3"> Convenient home pickup and delivery service for your laundry.</p>
        </div>

        {/* Service 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          
          <h3 className="text-xl font-bold text-gray-800 mt-6">Express Service</h3>
          <p className="text-gray-600 mt-3"> Same-day or next-day laundry service when you need clothes quickly. </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          <h3 className="text-xl font-bold text-gray-800 mt-6">Ironing Service</h3>
          <p className="text-gray-600 mt-3"> Crisp, wrinkle-free ironing to keep your clothes looking sharp.</p>
        </div>

        {/* Service 6 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          <h3 className="text-xl font-bold text-gray-800 mt-6">Blanket & Bedding</h3>
          <p className="text-gray-600 mt-3"> Special cleaning care for blankets, duvets, and beddings.</p>
        </div>
      </div>
    </div>
  );
}

export default Service

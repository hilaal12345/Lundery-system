import { animate } from "framer-motion";


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

       <section className="bg-white py-16 px-6 md:px-12 mt-10">
      {/* Title */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-emerald-600"> Laundry Service Prices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          {/* Left: Text */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p> Laundry Lite offers best lowest guaranteed price for their laundry services, which ensures that customers are getting the best deal for their money. We offer discounts for bulk or regular service, as well as price-matching policies to ensure that customers are not overpaying for their laundry needs. This makes laundry services affordable and accessible for everyone in the city.</p>
            <p className="mt-4">  Our all laundry service prices (wash laundry, dry cleaning and ironing) are one of the best competitive, cheapest and affordable in town.</p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img className="rounded-full shadow-lg w-full  md:w-96 object-cover" src="https://i.pinimg.com/1200x/6b/83/3c/6b833cba743b0e57a48a37cf86c61d47.jpg" alt="Laundry Service"  />
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">2 x 2 Piece Suit</h3>
            <p className="text-emerald-600 text-xl font-bold mt-2">Price £24</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">20 Shirts on Hangers</h3>
            <p className="text-emerald-600 text-xl font-bold mt-2">Price £43</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">           
            <h3 className="text-lg font-semibold text-gray-800"> 2 Bed Sets (Double/King) <br /> Wash/Dry + Iron </h3>
            <p className="text-emerald-600 text-xl font-bold mt-2">Price £20</p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-emerald-700 transition"> VIEW FULL PRICE LIST </button>
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default Service

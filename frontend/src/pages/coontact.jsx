import Footer from "../components/footer";
import Header from "../components/header";

 function Contact() {
  return <>
 
    <div className=" min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700"> Contact <span className="text-red-700">Us</span> </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"> We’d love to hear from you. Reach out for any questions, support, or  feedback — our team is always here to help! </p>
      </section>

      {/* Contact Form + Info */}
      <section className="flex flex-col md:flex-row gap-12 px-6 md:px-20 py-12">
        {/* Left: Form */}
        <div className="md:w-2/3 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input type="text" placeholder="Enter your name"className="w-full mt-2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-600" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full mt-2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-600" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea rows="5"  placeholder="Write your message..." className="w-full mt-2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-600" ></textarea>
            </div>
            <button type="submit" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition"> Send Message </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="md:w-1/3 bg-emerald-700 text-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-6 text-emerald-100">
            You can also reach us through our office or social platforms.
          </p>
          <ul className="space-y-6">
            <li>
              <span className="block font-semibold">Phone</span>
              <p className="text-emerald-100">+252 61 234 5678</p>
            </li>
            <li>
              <span className="block font-semibold">Email</span>
              <p className="text-emerald-100">support@laundryexpress.com</p>
            </li>
            <li>
              <span className="block font-semibold">Address</span>
              <p className="text-emerald-100">
                KM4, Maka Al Mukarama Street, Mogadishu, Somalia
              </p>
            </li>
          </ul>
        </div>
      </section>

     
    </div>
    
  </>
}

export default Contact

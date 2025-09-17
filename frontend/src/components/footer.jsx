import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#06D6A0] mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 text-[#f8ffe5]">
        
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10 mb-8">
          <ul className="flex gap-6 font-semibold text-lg">
            <Link to="/"><li className="hover:text-white transition">Home</li></Link>
            <Link to="/about"><li className="hover:text-white transition">About</li></Link>
            <Link to="/service"><li className="hover:text-white transition">Services</li></Link>
            <Link to="/contact"><li className="hover:text-white transition">Contact</li></Link>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/252612338427" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#f8ffe5] text-2xl">📞</span>
                <div>
                  <div className="font-medium">+252 612338427</div>
                  <div className="text-[#f8ffe5] text-xs">Mon-Sat: 8:00 AM - 7:00 PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f8ffe5] text-2xl">📍</span>
                <div>
                  <div>KM4, Maka Al Mukarama St, Mogadishu</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f8ffe5] text-2xl">✉️</span>
                <div>
                  <div>support@hshlaundry.com</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links / Extra Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">Terms & Conditions</li>
              <li className="hover:underline cursor-pointer">Track Order</li>
            </ul>
          </div>

          {/* Newsletter / Subscribe */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Subscribe</h4>
            <p className="text-sm">Get latest updates and offers</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-md flex-1 text-gray-800"
              />
              <button className="bg-[#f8ffe5] text-[#06D6A0] px-4 rounded-r-md font-semibold hover:bg-white transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-[#f8ffe5]">
          &copy; {new Date().getFullYear()} HSH Laundry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

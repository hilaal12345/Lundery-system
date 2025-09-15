import { Link } from "react-router-dom"

// import img from "../components/image"
function Footer (){
    return <div className="bg-current mt-5">
         <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">

                <div className="space-y-6 mt-10">
                    <ul className="  text-white flex gap-6 font-semibold text-2 justify-center">
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/about"}><li>About</li></Link>
                        <Link to={"/services"}><li>Services</li></Link>
                        <Link to={"/contact"}><li>Contact</li></Link>
                    </ul>

                    <div className="text-white text-center space-x-4">
                        <a href="https://wa.me/252612338427" target="_blank" rel="noopener noreferrer" ><i className="fab fa-whatsapp mr-2"></i> ‪‬</a> 
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>

                    </div>



                    

                    


                    

                    
                </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="space-y-4 mt-5">
                    <h4 className="text-sm  font-semibold   text-gray-300">Contact</h4>
                    <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-400">📞</span>
                        <div>
                        <div className="text-gray-100 font-medium">+252 612338427   </div>
                        <div className="text-gray-400 text-xs">Mon-Sat: 8:00 AM - 7:00 PM</div>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-400">📍</span>
                        <div>
                        <div className="text-gray-100">KM4, Maka Al Mukarama St, Mogadishu</div>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-400">✉️</span>
                        <div>
                        <div className="text-gray-100">support@hshlaundry.com</div>
                        </div>
                    </li>
                    </ul>
                </div>


                


                

               
            </div>
        </div>

    </div>
}

export default Footer
import { Link } from "react-router-dom"

function About() {
  return  <>
    
    <div className="min-h-screen">
      {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            About <span className="text-emerald-600">LaundryExpress</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"> We’re more than just a laundry service — we’re your trusted partner in  saving time and delivering freshness to your wardrobe. </p>
        </section>

        {/* About Content (Text + Image) */}
      <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-12">
        {/* Left Side: Text */}
            <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-800">Who We Are</h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">  LaundryExpress is a modern laundry and dry-cleaning service dedicated  to making your life easier. With years of experience, we combine  professional care with the convenience of home pickup and delivery.</p>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed"> Our mission is to give you more free time by handling the hassle of  laundry. Trusted by hundreds of happy customers, we’re proud to be  your reliable laundry partner.</p>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2 flex justify-center">
             <img  className="rounded-2xl shadow-lg w-full md:w-4/5"  src="https://i.pinimg.com/1200x/85/16/96/851696dcf18248fc8c4845124dc9f7bd.jpg" alt="Laundry service workers" />
            </div>
        </section>

      {/* Mission & Vision Section */}
        <section className="px-6 md:px-20 py-16 bg-white">
            <h2 className="text-3xl font-bold text-center text-blue-800"> Our Values </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Mission Card */}
                <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
                    <p className="text-gray-600 mt-4 leading-relaxed">To provide high-quality laundry services that save you time and   make your life easier, with reliable pickup and doorstep delivery. </p>
                </div>
            {/* Vision Card */}
                <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
                    <p className="text-gray-600 mt-4 leading-relaxed"> To become the most trusted laundry brand by offering innovative,  eco-friendly, and customer-focused solutions in every community we serve.</p>
                </div>
            </div>
        </section>

        <div className="text-center font-semibold space-y-10 ">
            <p className="pt-5 text-2xl font-semibold">if you want more informotion than contact us </p>
            <Link to={"/contact"}><button className="bg-emerald-700 mt-5 text-2xl font-semibold text-white px-6 py-3 rounded-lg hover:bg-blue-700">Contact Us</button></Link>
        </div>

    </div>


    </> 
  
}

export default About

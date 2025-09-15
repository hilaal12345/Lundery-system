
function Home(){
    return <>
        {/* <Header/> */}
        <div className="w-screen mt-3  bg-current">
        <section className="flex flex-col md:flex-row items-center justify-center gap-20 px-10 py-16">
            <div className="max-w-xl">
            <h2 className="text-5xl font-extrabold text-white leading-tight"> Fast & Reliable <span className="text-emerald-600">Laundry</span> Service</h2>
            <p className="text-white mt-4 text-lg">We pick up your clothes, wash them with care, and deliver them back fresh,  clean, and on time — hassle-free. </p>
            <div className="mt-6 flex gap-4">
                <button className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700">  Get Started </button>
                <button className="border border-blue-600 text-emerald-600 px-6 py-3 rounded-lg ">Learn More </button>
            </div>
            </div>
            <img className="w-80 h-80  rounded-full" src="https://i.pinimg.com/736x/6f/3d/86/6f3d869f17093d2adf68d2b2989fdd3b.jpg"  alt="Laundry Service"/>
            <img className="w-80 h-80 rounded-full" src="https://i.pinimg.com/1200x/bb/12/96/bb129643abbe1638d6360a7625e886bb.jpg" alt="" />
         </section>

      {/* Services Section */}
        <section className="px-10 py-16 bg-white">
            <h3 className="text-3xl font-bold text-center text-gray-800">  Our Services </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg">
                    <img className="rounded-full w-60 " src="https://i.pinimg.com/1200x/bb/cb/17/bbcb1751593689ff83d87a71eb6fcb80.jpg" alt="Wash & Fold"/>
                    <h4 className="text-xl font-semibold text-gray-800">Wash & Fold</h4>
                    <p className="text-gray-600 mt-2">  We wash, dry, and neatly fold your clothes with care. </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg">
                    <img className="rounded-full  w-60" src="https://i.pinimg.com/1200x/60/db/f3/60dbf3a3cfe1b6ec05910636c8c58398.jpg"  alt="Ironing"   />
                    <h4 className="text-xl font-semibold text-gray-800">Ironing</h4>
                    <p className="text-gray-600 mt-2"> Professionally ironed clothes, ready to wear at any time. </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg">
                    <img className="rounded-full w-60" src="https://i.pinimg.com/736x/21/51/a5/2151a5cd4e7d5fad3a08c7d5216c7d5f.jpg" alt="Pickup & Delivery" />
                    <h4 className="text-xl font-semibold text-gray-800">Pickup & Delivery</h4>
                    <p className="text-gray-600 mt-2"> Convenient pickup and doorstep delivery — always on time. </p>
                </div>
            </div>
        </section>
        </div>

    </>
}

export default Home
import Home from "../pages/home"

function Header(){
    return <>

    
    <div className="flex justify-between px-16 py-4 ">
        <h1 className="text-emerald-600 text-2xl font-bold">HSH LAUNDRY </h1>   
        <ul className="flex text-emerald-600 gap-8 text-2xl font-semibold ">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
        <div>
            <button className="bg-emerald-700 px-10 text-white font-semibold rounded-lg text-xl py-2">
                <i className="bg-emerald-700">login</i>
            </button>

            <button className="bg-emerald-700 px-10 text-white font-semibold rounded-lg text-xl py-2 ml-5">Sign In</button>
        </div>

        
    </div>

  <Home/>

    </>
}

export default Header
import { Link, NavLink, useNavigate } from "react-router-dom"


function Header(){
    const navigate = useNavigate()
    const getCustomer=localStorage.getItem("customer")

    const handleLogOut=()=>{
        localStorage.clear()
        navigate("/login")
    }
    return <>

    
    <div className="flex justify-between px-16 py-4 ">
        <h1 className="text-emerald-600 text-2xl font-bold">HSH LAUNDRY </h1>   
        <ul className="flex text-emerald-600 gap-8 text-2xl font-semibold ">
           <Link to={"/"}><li>Home</li></Link>
            <Link to={"/about"}> <li>About</li></Link>
            <Link to={"/service"}><li>Service</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link>
        </ul>
        {
            getCustomer ? <div className="flex gap-5">
            <NavLink to={"/profile"}> <button  className="bg-emerald-700 px-10 text-white font-semibold rounded-lg text-xl py-2">
                {/* <i className="bg-emerald-700"></i> */}
                <i className="fa-solid fa-user"></i>
            </button></NavLink>

            <NavLink to={"/OrderForm"}><button className="bg-emerald-700 px-10 text-white font-semibold rounded-lg text-xl py-2">
                <i className="bg-emerald-700">Add Order</i>
            </button> </NavLink>
            </div>
            :
            <div>
            <NavLink to={"login"}><button className="bg-emerald-700 px-10 text-white font-semibold rounded-lg text-xl py-2">
                <i className="bg-emerald-700">login</i>
            </button></NavLink>

            <NavLink to={"/Registration"}><button className="bg-emerald-700 px-10 text-white font-semibold rounded-lg text-xl py-2 ml-5">Sign In</button></NavLink>
        </div>

        }

        
        
        

        
    </div>



    </>
}

export default Header
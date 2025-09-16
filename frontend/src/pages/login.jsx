import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function Login() {
    const[email, setEmail] = useState("")
    const[password, setPassword]= useState("")
    const[active, setActive] = useState("customer")


    const navigate = useNavigate()

    function handleInsert(e) {
        e.preventDefault()
        const url = active === "customer" ? "http://localhost:3000/login/customer" : "http://localhost:3000/login/admin"
        const payload = active === "customer" ? { email: email, password: password} : {email: email, password: password}
        axios.post(url, payload).then((res)=> {
            
            toast.success(`${active}Login succesfully`)
            // setTimeout(() => navigate(active === "customer" ? "/" : "/dashboard"), 1500)
            localStorage.setItem("customer", JSON.stringify(res.data) )
            navigate("/")

        }).catch((error) => {
          if(error){
            toast.error("this is email already exits")
          }
        })
    }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <div className="flex justify-center gap-8">
          <button onClick={()=> setActive("customer")} className= {` px-12 py-3 rounded-2xl ${active === "customer" ? "bg-blue-500 text-white" : "border-2 border-black text-black"}`}>Customer</button>
          <button onClick={()=> setActive("admin")} className= {` px-12 py-3 rounded-2xl ${active === "admin" ? "bg-blue-500 text-white" : "border-2 border-black text-black"}`}>Admin</button>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight mb-1">Login</h2>

        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              
              id="email"
              type="email"
              name="email"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
              
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="password"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
             
            />
          </div>

          <p className="text-sm text-gray-600 text-center mt-2">
            <a href="/forgetPassword" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </p>

          <button onClick={(e) => handleInsert(e)}
            type="submit"
            className="w-full rounded-xl bg-gray-900 px-4 py-2 text-white font-medium hover:bg-black"
          >
            {active === "customer" ? "Login Customer" : "Login Admin"}
          </button>
        </form>

        
      </div>
      <ToastContainer  position="top-right" autoClose={3000} />
    </div>
  )
}

export default Login

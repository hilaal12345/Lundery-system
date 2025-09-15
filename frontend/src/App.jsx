import Footer from "./components/footer"
import Header from "./components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
// import Service from "./pages/services"
import About from "./pages/about"
import Contact from "./pages/coontact"
import Register from "./pages/registration"
import Login from "./pages/login"
import Dashboard from "./pages/Dashboard"
import OrderForm from "./pages/addOrder"
import ServiceDisplay from "./Dash/displaySer"



function App(){
  return <>
    <Header/>
    
   
    
   
    
      {/* <Route path="/service"element={ <Service/>}/> */}
    <Routes>

      {/* <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/contact"element={ <Contact/>}/>
      <Route path="/Registration"element={ <Register/>}/>
      <Route path="/login"element={ <Login/>}/>
       <Route path="/dashbord"element={<Dashboard/>}/> */}
       <Route path="/OrderForm"element={<OrderForm/>}/>
       <Route path="/ServiceDisplay"element={<ServiceDisplay/>}/>

    </Routes>

 
    

    

    
    
    

  
    

    <Footer/>
  </>

  
} 
export default App
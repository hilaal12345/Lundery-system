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
// import ServiceDisplay from "./Dash/displayOrder"
import OrderDisplay from "./Dash/displayOrder"
import Service from "./pages/services"
import Orderform from "./order"
import ServiceDisplayOne from "./Dash/serviceDisplay"
import AddService from "./Dash/add service"
// import CustomerOrder from "./user/order user"
// import UpdateOrder from "./user/update order"



function App(){
  return <>
    <Header/>
    
   
    
   
    
      
    <Routes>

      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/service"element={ <Service/>}/>
      <Route path="/contact"element={ <Contact/>}/>
      <Route path="/Registration"element={ <Register/>}/>
      <Route path="/login"element={ <Login/>}/>
       <Route path="/dashbord"element={<Dashboard/>}/>
       <Route path="/OrderForm"element={<Orderform/>}/>
       <Route path="/ServiceDisplay"element={<ServiceDisplayOne/>}/>
       <Route path="/OrderDisplay"element={ <OrderDisplay/>}/>
       <Route path="/Add Service"element={<AddService/>}/>
       {/* <Route path="/UpdateOrder/:id"element={<UpdateOrder/>}/> */}
    </Routes>
    {/* <CustomerOrder/> */}
    

    

  

   

    
    

   
    
   

 
    

    

    
    
    

  
    

    <Footer/>
    
  </>

  
} 
export default App
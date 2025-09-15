import Footer from "./components/footer"
import Header from "./components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/services"
import About from "./pages/about"
import Contact from "./pages/coontact"
import OrderForm from "./order"
import Dashboard from "./Dash/Dashboard"
import ServiceDisplay from "./Dash/serviceDisplay"


function App(){
  return <>
    <Header/>
    
   
    
   
    
    
    <Routes>
      {/* salmo  inta routekada kusameeso */}
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/service"element={ <Service/>}/>
      <Route path="/contact"element={ <Contact/>}/>
      


       {/* hiba  inta routekada kusameeso */}
       <Route path="/OrderForm"element={<OrderForm/>}/>
       <Route path="/dashbord"element={<Dashboard/>}/>
       <Route path="/Service Display"element={<ServiceDisplay/>}/>

       


    </Routes>
    

    

    
    
    

  
    

    <Footer/>

    
    





 

   


 


  </>
} 
export default App
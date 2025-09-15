import Footer from "./components/footer"
import Header from "./components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/services"
import About from "./pages/about"
import Contact from "./pages/coontact"
// import Register from "./pages/registration"
// import Login from "./pages/login"
// import Dashboard from "./pages/Dashboard"

// // import ServiceDisplay from "./Dash/displayOrder"
// // import OrderDisplay from "./Dash/displayOrder"
// import Service from "./pages/services"
// import Orderform from "./order"



function App(){
  return <>
    <Header/>
    
   
    
   
    
      
    <Routes>

      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/service"element={ <Service/>}/>
      <Route path="/contact"element={ <Contact/>}/>
      {/* <Route path="/Registration"element={ <Register/>}/>
      <Route path="/login"element={ <Login/>}/>
       <Route path="/dashbord"element={<Dashboard/>}/>
       <Route path="/OrderForm"element={<Orderform/>}/>
       <Route path="/ServiceDisplay"element={<ServiceDisplay/>}/>
       <Route path="/OrderDisplay"element={ <OrderDisplay/>}/> */}
    </Routes>
    
    <Footer/>
    
  </>

  
} 
export default App
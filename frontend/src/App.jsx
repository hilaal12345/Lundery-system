import Footer from "./components/footer"
import Header from "./components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/services"
import About from "./pages/about"
import Contact from "./pages/coontact"
import Register from "./pages/registration"
import Login from "./pages/login"


function App(){
  return <>
    <Header/>
    
   
    
    
      {/* salmo  inta routekada kusameeso */}
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/service"element={ <Service/>}/>
      <Route path="/contact"element={ <Contact/>}/>
      <Route path="/Registration"element={ <Register/>}/>
      <Route path="/login"element={ <Login/>}/>
    </Routes>
    

    <Footer/>
  </>

  
} 
export default App
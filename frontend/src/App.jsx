import Footer from "./components/footer"
import Header from "./components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/services"
import About from "./pages/about"


function App(){
  return <>
    <Header/>
    
   
    
    
    <Routes>
      {/* salmo  inta routekada kusameeso */}
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/service"element={ <Service/>}/>
      
       



       {/* xafso  inta routekada kusameeso */}





        {/*hibo  inta routekada kusameeso */}
        
         

      
    </Routes>
    

    <Footer/>

    
    





 

   


 


  </>
} 
export default App
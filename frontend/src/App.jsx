import OrderForm from "./order"

// function App(){
//   return <>
//   <h1 className="text-7xl text-red-500"> Hello guys</h1>
//   <p>banaat </p>
//   <OrderForm/>
import Footer from "./components/footer"
import Header from "./components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/services"

function App(){
  return <>
    <Header/>
    <Footer/>
   
    
    
    <Routes>
      {/* salmo  inta routekada kusameeso */}
      <Route path="/"element={<Home/>}/>
      <Route path="/service"element={ <Service/>}/>



       {/* xafso  inta routekada kusameeso */}





        {/*hibo  inta routekada kusameeso */}

      
    </Routes>
    


    
    





 

   


 


  </>
} 
export default App
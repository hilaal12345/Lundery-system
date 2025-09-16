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
import ForgetPassword from "./pages/forget"
import ProfileForm from "./pages/profile"
import ProtectAdmin from "./pages/protectAdmin"
import ProtectCustomer from "./pages/protectCustomer"



// Layout leh Header (Home, Product)
function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

// Layout leh Dashboard (Dashboard iyo Product-ka gudaha dashboard)
function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Dashboard /> {/* Sidebar-ka dashboard */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}



function App(){
  return <>
   
    
   
    
   
    
      {/* <Route path="/service"element={ <Service/>}/> */}
    <Routes>

     

      <Route path="/"element={
        <ProtectCustomer><MainLayout><Home/></MainLayout> </ProtectCustomer>}/>
      <Route path="/about"element={
        <ProtectCustomer><MainLayout> <About/> </MainLayout></ProtectCustomer> }/>
      <Route path="/contact"element={ 
        <ProtectCustomer><MainLayout><Contact/> </MainLayout> </ProtectCustomer>}/>
      <Route path="/Registration"element={ 
        <ProtectCustomer><MainLayout> <Register/> </MainLayout> </ProtectCustomer>}/>
      <Route path="/login"element={ 
        <ProtectCustomer><MainLayout><Login/> </MainLayout> </ProtectCustomer>}/>
       <Route path="/dashbord"element={ <ProtectAdmin>
        <DashboardLayout><Dashboard/> </DashboardLayout> </ProtectAdmin>}/>
       <Route path="/OrderForm"element={
        <ProtectCustomer><MainLayout><OrderForm/></MainLayout></ProtectCustomer> }/>
       <Route path="/ServiceDisplay"element={<ProtectAdmin>
        <DashboardLayout><ServiceDisplay/></DashboardLayout> </ProtectAdmin> }/>
       <Route path="/forgetPassword"element={
        <ProtectCustomer><MainLayout> <ForgetPassword/> </MainLayout></ProtectCustomer>}/>
       <Route path="/profile"element={
        <ProtectCustomer><MainLayout><ProfileForm/></MainLayout> </ProtectCustomer>}/>

    </Routes>

 
    

    

    
    
    

  
    

    <Footer/>
  </>

  
} 
export default App
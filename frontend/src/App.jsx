import Footer from "./components/footer"
import Header from "./components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Service from "./pages/services"
import About from "./pages/about"
import Contact from "./pages/coontact"
<<<<<<< HEAD
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
=======
// import Register from "./pages/registration"
// import Login from "./pages/login"
// import Dashboard from "./pages/Dashboard"

// // import ServiceDisplay from "./Dash/displayOrder"
// // import OrderDisplay from "./Dash/displayOrder"
// import Service from "./pages/services"
// import Orderform from "./order"
>>>>>>> 11ba6d6539d11fb898ae9dbbaf9a5977580140c8



function App(){
  return <>
   
    
   
    
   
    
      
    <Routes>

<<<<<<< HEAD
     

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

=======
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
>>>>>>> 11ba6d6539d11fb898ae9dbbaf9a5977580140c8
    </Routes>
    
    <Footer/>
    
  </>

  
} 
export default App
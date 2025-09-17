

// export default App;
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
import Service from "./pages/services"
import AddService from "./service/add service"
import UpdateService from "./service/update service"
import CustomerDisplay from "./Dash/CustomerDisplay"
import AdminDisplay from "./Dash/Admin Display"
// import Profile from "./pages/profile"
import ForgetPassword from "./pages/forget"
import ServiceDisplay from "./service/serviceDisplay"
// import UpdateNewService from "./service/update service"
import UpdatePrice from "./service/update service"
import NewOrderForm from "./order/order form"
import NEWOrdersDisplay from "./order/DisplayOrders"
// import CustomerOrder from "./user/order user"

import ProtectAdmin from "./pages/protectAdmin"
// import ProtectCustomer from "./pages/protectCustomer"


// import CustomerOrder from "./user/order user"
// import UpdateOrder from "./user/update order"

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
function FootetrLayout({ children }) {
  return (
    <div>
      <Footer/>
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
  )}
  




function App(){
  return <>
    {/* <Header/> */}
    
   
    
   
    
      
    <Routes>
{/*     
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
       <Route path="/service"element={
        <ProtectCustomer><MainLayout><Service/></MainLayout> </ProtectCustomer>}/> */}

    
    {/* <Routes > */}

      <Route path="/"element={<MainLayout> <Home/><FootetrLayout/></MainLayout>} />
      <Route path="/about"element={<MainLayout><About/><FootetrLayout/></MainLayout>}/>
      <Route path="/service"element={<MainLayout><Service/><FootetrLayout/></MainLayout>}/>
      <Route path="/contact"element={<MainLayout><Contact/><FootetrLayout/></MainLayout>}/>
      <Route path="/Registration"element={<MainLayout><Register/><FootetrLayout/></MainLayout>}/>
      <Route path="/login"element={<MainLayout><Login/><FootetrLayout/></MainLayout>}/>

       <Route path="/dashbord"element={<Dashboard/>}/>
       <Route path="/OrderForm"element={<MainLayout><NewOrderForm/><FootetrLayout/></MainLayout>}/>
       <Route path="/ServiceDisplay"element={<DashboardLayout><ServiceDisplay/></DashboardLayout>}/>
       <Route path="/OrderDisplay"element={<DashboardLayout><NEWOrdersDisplay/></DashboardLayout>}/>
       <Route path="/Add Service"element={<DashboardLayout><AddService/></DashboardLayout>}/>
       {/* <Route path="/UpdateOrder/:id"element={<UpdateOrder/>}/> */}
       {/* <Route path="/UpdateService/:id"element={<UpdateService/>}/> */}
       <Route path="/UpdateService/:id" element={<DashboardLayout><UpdateService /></DashboardLayout>} />
       {/* <Route path="/CustomerDisplay" element={<CustomerDisplay/>} /> */}
       <Route path="/CustomerDisplay" element={<DashboardLayout><CustomerDisplay/></DashboardLayout>} />
       <Route path="/AdminDisplay" element={<DashboardLayout><AdminDisplay/></DashboardLayout>} />
       
      {/* <Route path="/Profile"element={<MainLayout><Profile/></MainLayout>}/> */}
      <Route path="/forgetPassword"element={<MainLayout><ForgetPassword/><FootetrLayout/></MainLayout>}/>
      

      <Route path="/UpdateService/:id" element={<DashboardLayout><UpdatePrice/></DashboardLayout>} />
      <Route path="/dash" element={<DashboardLayout><Dashboard/> </DashboardLayout>} />




       



       {/* <Route path="/sssss" element={<ProtectAdmin/>} />
       <Route path="/sssss" element={<ProtectCustomer/>} /> */}

      







    </Routes>

    {/* <CustomerOrder/> */}
    
    

   
    
    
    
    
    
  </>

  
} 
export default App
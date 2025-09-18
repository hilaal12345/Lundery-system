

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
import Dash from "./pages/pageDashboard"
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


      <Route path="/"element={<MainLayout> <Home/><FootetrLayout/></MainLayout>} />
      <Route path="/about"element={<MainLayout><About/><FootetrLayout/></MainLayout>}/>
      <Route path="/service"element={<MainLayout><Service/><FootetrLayout/></MainLayout>}/>
      <Route path="/contact"element={<MainLayout><Contact/><FootetrLayout/></MainLayout>}/>
      <Route path="/Registration"element={<MainLayout><Register/><FootetrLayout/></MainLayout>}/>
      <Route path="/login"element={<MainLayout><Login/><FootetrLayout/></MainLayout>}/>
       <Route path="/OrderForm"element={<MainLayout><NewOrderForm/><FootetrLayout/></MainLayout>}/>
       <Route path="/ServiceDisplay"element={<ProtectAdmin><DashboardLayout><ServiceDisplay/></DashboardLayout></ProtectAdmin>}/>
       <Route path="/OrderDisplay"element={<ProtectAdmin><DashboardLayout><NEWOrdersDisplay/></DashboardLayout></ProtectAdmin>}/>
       <Route path="/Add Service"element={<ProtectAdmin><DashboardLayout><AddService/></DashboardLayout></ProtectAdmin>}/>
      
       <Route path="/UpdateService/:id" element={<ProtectAdmin><DashboardLayout><UpdateService /></DashboardLayout></ProtectAdmin>} />
      
       <Route path="/CustomerDisplay" element={<ProtectAdmin><DashboardLayout><CustomerDisplay/></DashboardLayout></ProtectAdmin>} />
       <Route path="/AdminDisplay" element={<ProtectAdmin><DashboardLayout><AdminDisplay/></DashboardLayout></ProtectAdmin>} />
       
      <Route path="/forgetPassword"element={<MainLayout><ForgetPassword/><FootetrLayout/></MainLayout>}/>
      

      <Route path="/UpdateService/:id" element={<ProtectAdmin><DashboardLayout><UpdatePrice/></DashboardLayout></ProtectAdmin>} />
      <Route path="/dashbord" element={<ProtectAdmin><DashboardLayout>
        <Dash/></DashboardLayout></ProtectAdmin>} />

      







    </Routes>

    
    

   
    
    
    
    
    
  </>

  
} 
export default App
import {Navigate}from "react-router-dom"
function ProtectCustomer({children}){
    
    const Customer=localStorage.getItem("customer")
    if (!Customer) {
        return <Navigate to={"/Registration"} replace/>
    }

    return  children

} export default ProtectCustomer
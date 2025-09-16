import {Navigate}from "react-router-dom"
function ProtectCustomer({children}){
    
    const admin=localStorage.getItem("customer")
    if (!customer) {
        return <Navigate to={"/Registration"} replace/>
    }

    return  children

} export default ProtectCustomer
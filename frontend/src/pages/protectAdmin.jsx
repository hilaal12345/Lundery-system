import {Navigate}from "react-router-dom"
function ProtectAdmin({children}){
    
    const admin=localStorage.getItem("admin")
    if (!admin) {
        return <Navigate to={"/login"} replace/>
    }

    return  children

} export default ProtectAdmin
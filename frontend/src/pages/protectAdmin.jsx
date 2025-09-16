import {Navigate}from "react-router-dom"
function protectAdmin({children}){
    
    const admin=localStorage.getItem("admin")
    if (!admin) {
        return <Navigate to={"/login"} replace/>
    }

    return  children

} export default protectAdmin
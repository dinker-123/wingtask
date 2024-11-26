import React,{useContext} from "react"
import {Navbar,Container,Nav }from "react-bootstrap"
import { Link,useNavigate } from "react-router-dom"
// import { AuthContext } from "../context/AuthContext"
const NavBar=()=>{
    // const {user,logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleLogout = ()=>{
        // logout()
        navigate("/login")
    }
    
return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brnav" to="/">NoteApp</Link>
        <div className="ml-auto">
    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
<Link className="btn btn-primary" to="/login">Login</Link>
        </div>
        </nav>
    </>
)
}
export default NavBar
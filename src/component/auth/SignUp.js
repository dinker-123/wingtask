import React,{useState} from "react"
import { Container,Form,Button,Alert } from 'react-bootstrap';
import { FaRegEye } from "react-icons/fa"
const SignUp=()=>{
const [userData,setUserData]=useState({username:"",password:"",confirmPassword:""})
const [error,setError]=useState("")
const [showPassword,setShowPassword]=useState(true)
const [showConfirmPassword,setShowConfirmPassword]=useState(true)
const handleSubmit=(e)=>{
    e.preventDefault()
    if(userData.password!==userData.confirmPassword){
        setError("Passwords do not match")
        return
    }
}

return (
    <>
    <div className="parent-container">
<div>
    <label htmlFor="username">UserName</label>
    <input type="text" id="username" required placeholder="Enter your name" style={{border:"none"}}/>
</div>
<div>
    <label htmlFor="password">Password</label>
    <input type={showPassword?"password":"text"} id="password" required placeholder="Enter your name" style={{border:"none"}} 
    />
    <FaRegEye onClick={()=>{setShowPassword(!showPassword)}} />
</div>
<div>
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type={showConfirmPassword?"password":"text"} id="confirm-password" required placeholder="Enter your name" style={{border:"none"}}/><FaRegEye onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}/>
</div>
    </div>
    <Container className="mt-5">
            <h2>Signup</h2>
            <Form onSubmit={handleSubmit}>
<Form.Group controlId="username">
    <Form.Label>Username</Form.Label>
    <Form.Control type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} required></Form.Control>
    </Form.Group> 
    <Form.Group controlId="password" className="mt-3">
    <Form.Label>password</Form.Label>
    <Form.Control type='password' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} required></Form.Control>

         </Form.Group>  
         <Form.Group controlId="confirmPassword" className="mt-3">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required></Form.Control> </Form.Group>
         <Button type="submit" className="mt-3">Sign In</Button>        
</Form>
        </Container> 
    </>
)
}
export default SignUp
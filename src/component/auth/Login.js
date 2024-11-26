import React,{useState} from 'react';
import { Container,Form,Button,Alert } from 'react-bootstrap';

function Login (){

    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");
const handleSubmit = (e)=>{
e.preventDefault()
}
    return(
        <>
        <Container className="mt-5">
            <h2>Log In</h2>
            <Form onSubmit={handleSubmit}>
<Form.Group controlId={username}>
    <Form.Label>Username</Form.Label>
    <Form.Control type='text' value={username} onChange={(e)=>setUsername(e.target.value)} required></Form.Control>
    </Form.Group> 
    <Form.Group controlId={password} className="mt-3">
    <Form.Label>password</Form.Label>
    <Form.Control type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required></Form.Control>

         </Form.Group>  
         <Button type="submit" className="mt-3">Log In</Button>        
</Form>
        </Container>
        </>
    )
}

export default Login;
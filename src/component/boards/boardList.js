import React,{useState} from "react"
import { ListGroup,Form,Button,Modal } from "react-bootstrap"
const BoardList=()=>{
const [show,setShow]=useState(false)
const[newBoardName,setNewBoardName]=useState("")
return (
    <>
    <div>
        <h3>your Boards</h3>
        <ListGroup >
            
        </ListGroup>
    </div>
    </>
)
}
export default BoardList
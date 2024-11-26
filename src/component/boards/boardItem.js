import React from "react";
import { Button } from "react-bootstrap";
const BoardItem=()=>{
return (
    <>
    <div className="d-flex justify-content-between align-items-center border p-2 rounded mb-2" 
    style={{cursor:"pointer"}}
    onClick={()=>{}}
    >
{/* <span>{board.name}</span> */}
<Button  variant="danger"size="sm" onClick={(e)=>{e.preventDefault()}}>Delete</Button>
    </div>

    
    </>
)
}
export default BoardItem;
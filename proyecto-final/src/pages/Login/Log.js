import React, { useState } from 'react'
import LoginComponent from './LoginComponent'
import Register from './Register'
import { Button}  from 'react-bootstrap';

function Log() {
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    if(show)
    {
        return(
            <>
                <LoginComponent/>  
                <br/>
                <Button variant='primary' onClick={handleClose}>You don't have account?</Button>
            </>
        )
    }
    else{
        return(
            <div ><Register/><Button variant='primary' onClick={handleShow}>registro</Button></div> 
        )
    }
}

export default Log
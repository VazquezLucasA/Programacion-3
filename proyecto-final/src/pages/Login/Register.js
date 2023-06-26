import { useEffect, useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
let endpoint = 'http://localhost:3000/Usuarios/';

   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")

  useEffect(() => {
    document.title = `nombre ${username} clave ${password}`;
  });

  const handleChangeUser = (event) => {
    console.log(event.target.value)
    setUsername(event.target.value)
  }

  const handleChangePass = (event) => {
    console.log(event.target.value)
    setPassword(event.target.value)
  }

const [post, setPost] = useState(null);
  
function createPost() {
  axios
    .post(endpoint, {
      username: username,
      password: password
    })
    .then((response) => {
      setPost(response.data);
    });
}

  return (
    <div className='container'>
        <div className='form-group'>
            <label>Username</label>
            <input type='text' placeholder='username' className='form-control' name='username' onChange={handleChangeUser}/>
        </div>
        <br/>
        <div className='form-group'>
            <label>Password</label>
            <input type='password' placeholder='password' className='form-control' name='password' onChange={handleChangePass}/>
            <h3 name='nombre'> nombre </h3>
        </div>
        <Button onClick={createPost} variant='primary'>Registrarse</Button>
    </div>
  )
}

export default LoginComponent
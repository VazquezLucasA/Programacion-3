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
const navigate = useNavigate();


let endpoint = 'http://localhost:3000/Usuarios/';

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [foundUser, setFoundUser] = useState(null);

const handleChangeUser = (event) => {
  setUsername(event.target.value);
};

const handleChangePass = (event) => {
  setPassword(event.target.value);
};

const resetForm = () => {
  setUsername("");
  setPassword("");
};

const click = () => {
  axios.get(endpoint).then((response) => {
    const users = response.data;
    console.log(users);
    users.forEach((user) => {
      if (username === user.username && password === user.password) {
        setFoundUser(true);
        console.log('inicio de sesion')
        navigate('/inicio');
      }
    });
    
  });
  if(!foundUser) setFoundUser(false)
};

useEffect(() => {
  if (foundUser) {
    console.log("Inicio de sesión exitoso");
  }
  else {
    console.log("Inicio de sesión erroneo"); 
    alert('error');
  };
}, [foundUser]);

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
        <button onClick={click}>Login</button>
    </div>
  )
}

export default LoginComponent



// let endpoint = 'http://localhost:3000/Usuarios/';

//    const [username, setUsername] = useState("")
//    const [password, setPassword] = useState("")

//   useEffect(() => {
//     document.title = `nombre ${username} clave ${password}`;
//   });

//   const handleChangeUser = (event) => {
//     console.log(event.target.value)
//     setUsername(event.target.value)
//   }

//   const handleChangePass = (event) => {
//     console.log(event.target.value)
//     setPassword(event.target.value)
//   }

// function eliminar(){
//   axios.delete(endpoint+3).then(function (res){
//   })
// }

// const [post, setPost] = useState(null);
  
// useEffect(() => {
//   axios.get(`${endpoint}`).then((response) => {
//     setPost(response.data);
//   });
// }, []);

// function createPost() {
//   axios
//     .post(endpoint, {
//       username: username,
//       password: password
//     })
//     .then((response) => {
//       setPost(response.data);
//     });
// }

// const [geta, setGeta] = useState(null);

// useEffect(() => {
//   axios.get(endpoint).then((response) => {
//     setGeta(response.data);
//     console.log(response.data)
//   });
// }, []);

// const [foundUser, setFoundUser] = useState(false);

// const click = () => {
//   axios.get(endpoint).then((response) => {
//   setGeta(response.data);
//   console.log(response.data)
//     response.data.map(element => {
//       if (username === element.username && password === element.password) {
//         setFoundUser(true);
//       }
//     });

// });
// console.log(foundUser)
// }
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:3000/Usuarios/';

const Login = ()=> {
	const navigate = useNavigate();
  	const handleSubmit = (event) => {
		event.preventDefault();
		const username = event.target.username.value;
		const password = event.target.password.value;
  	  	axios
			.get(endpoint)
			.then((response) => {
  	    		const users = response.data;
  	    		const userFound = users.find(user=>user.username === username && user.password === password)
				if (userFound){
					alert(`LogIn succeed, welcome ${username}`)
					navigate('/Home')

				}else{
					alert('Wrong credentials')
				}
  	    	});
  	};
  	
    return (
      <form onSubmit={handleSubmit} className='container'>
        <h1>Log In</h1>
          <div className='form-group'>
              <label>Username</label>
              <input type='text' placeholder='username' className='form-control' name='username'/>
          </div>
          <br/>
          <div className='form-group'>
              <label>Password</label>
              <input type='password' placeholder='password' className='form-control' name='password'/>

          </div>
          <button type='submit'>Login</button>
          <button onClick={()=>navigate('/SignUp')}> IR A REGISTER</button>
      </form>
    )
}

export default Login;
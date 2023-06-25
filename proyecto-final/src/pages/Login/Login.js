import React from 'react'
import Encabezado from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Header from '../../components/Slider/Slider';
import List from '../../components/Products/Items';
import Main from '../../components/Main/Main';
import Aside from '../../components/Aside/Aside';
import LoginComponent from './LoginComponent';
import Register from './Register'

const Login = () => {
  return (
    <>
      <div className="grid-layout">
        <div className="nav">
          <Encabezado/>
        </div>
        <div className="header">
        </div>
        <div className="main">
          <h1>A LOGUEARSE</h1>
          <LoginComponent/>
          <Register/>
        </div>
        <div className="aside">
        </div>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default Login;




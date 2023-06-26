import React, { useState } from 'react'
import Encabezado from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Header from '../../components/Slider/Slider';
import List from '../../components/Products/Items';
import Main from '../../components/Main/Main';
import Aside from '../../components/Aside/Aside';
import LoginComponent from './LoginComponent';
import Register from './Register'
import { Button } from 'react-bootstrap';
import Log from './Log';
import './Login.css';

const Login = () => {

  return (
    <>
      <div className="grid-layoutLogin">
        <div className="navLogin">
          <Encabezado/>
        </div>
        <div className="mainLogin">
          <h1>A LOGUEARSE</h1>
          <Log></Log>
        </div>
        <div className="footerLogin">
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default Login;




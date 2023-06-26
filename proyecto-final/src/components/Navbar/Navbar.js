import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../assets/img/icono.png';
import { Link } from 'react-router-dom';
import TestComponent from '../AsideMenu/AsideMenu';


function Encabezado() {
  return (
    <>
      <Navbar  variant="dark" className="full-width-navbar" fixed='top'>
      <Container>
      <TestComponent/>
        <Navbar.Brand className="navbar-brand">
          <Link to="/Inicio" className='links'>
            <FontAwesomeIcon icon={faMobile} className="phone-icon" />
            <img src={Icon} alt="Logo" className="brand-image" />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link><Link to="/Productos" style={{textDecoration: 'none', color: 'white'}}>Productos</Link></Nav.Link>
          <Nav.Link ><Link to="/Contacto" style={{textDecoration: 'none', color: 'white'}}>Contáctanos</Link></Nav.Link>
          <Nav.Link ><Link to="/AboutUs" style={{textDecoration: 'none', color: 'white'}}>Sobre nosotros</Link></Nav.Link>
          <Nav.Link >
            <Link to="/Login" style={{textDecoration: 'none', color: 'white'}}><FontAwesomeIcon icon={faRightToBracket} className='login-icon'/>Login/Sign Up</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Encabezado;




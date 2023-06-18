import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Encabezado.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import Icon from '../../assets/img/icono.png';

function Encabezado() {
  return (
    <>
      <Navbar  variant="dark" className="full-width-navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <FontAwesomeIcon icon={faMobile} className="phone-icon" />
          <img src={Icon} alt="Logo" className="brand-image" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Productos</Nav.Link>
          <Nav.Link href="#features">Contáctanos</Nav.Link>
          <Nav.Link href="#pricing">Sobre nosotros</Nav.Link>
          <Nav.Link href="#pricing">Login/Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Encabezado;




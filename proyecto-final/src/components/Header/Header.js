import './navbar.css';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../assets/img/icono.png';
import { Link } from 'react-router-dom';
import AsideMenu from '../AsideMenu/AsideMenu';


function Header() {
 	return (
		<Navbar  variant="dark" className="full-width-navbar">
			<AsideMenu />
		    <Navbar.Brand className="navbar-brand">
		        <Link to="/Home" className='links'>
		        	<img src={Icon} alt="Logo" className="brand-image" />
		        </Link>
		    </Navbar.Brand>
		    <Nav className="ml-auto">
		        <Nav.Link><Link to="/Productos" style={{textDecoration: 'none', color: 'white'}}>Productos</Link></Nav.Link>
		        <Nav.Link ><Link to="/Contacto" style={{textDecoration: 'none', color: 'white'}}>Contáctanos</Link></Nav.Link>
		        <Nav.Link ><Link to="/AboutUs" style={{textDecoration: 'none', color: 'white'}}>Sobre nosotros</Link></Nav.Link>
		        <Nav.Link >
		            <Link to="/Login" style={{textDecoration: 'none', color: 'white'}}><FontAwesomeIcon icon={faRightToBracket} className='login-icon'/>Login</Link>
		        </Nav.Link>
		    </Nav>
		</Navbar>
  	)
}

export default Header;




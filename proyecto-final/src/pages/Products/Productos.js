import React from 'react'
import Encabezado from '../../components/Navbar/Navbar';
import List from '../../components/Products/List';
import Main from '../../components/Main/Main';
import Aside from '../../components/Aside/Aside';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Header from '../../components/Slider/Slider';


const Productos = () => {
  return (
    <>
      <div className="grid-layout">
        <div className="nav">
          <Encabezado/>
        </div>
        <div className="header">
        </div>
        <div className="main">
          <Main destacados="¡PRODUCTOS DESTACADOS!" />
          <List/>
        </div>
        <div className="aside">
          <Aside/> 
        </div>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default Productos;
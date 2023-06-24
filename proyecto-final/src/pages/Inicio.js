import React from 'react'
import Encabezado from '../components/Navbar/Navbar';
import Header from '../components/Slider/Slider';
import List from '../components/Products/Items';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';


const Inicio = () => {
  return (
    <>
      <div className="grid-layout">
        <div className="nav">
          <Encabezado/>
        </div>
        <div className="header">
          <Header/>
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

export default Inicio;
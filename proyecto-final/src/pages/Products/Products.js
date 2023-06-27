import React from 'react'
import Header from '../../components/Header/Header';
import List from '../../components/List';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';



const Productos = () => {
  return (
    <>
      <div className="grid-layout">
        <div className="nav">
          <Header/>
        </div>
        <div className="main">
          <List/>
        </div>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default Productos;
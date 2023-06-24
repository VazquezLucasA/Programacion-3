import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import  {Link} from 'react-router-dom';
import App from "../App";
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contact/Contacto';
import Login from "../pages/Login/Login";
import Productos from "../pages/Products/Productos";
import AboutUs from "../pages/AboutUs/AboutUs";
import React from 'react'

const RouterApp = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/Productos" element={<Productos />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default RouterApp


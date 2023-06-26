import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import App from "../App";
import Contacto from "../pages/Contact/Contacto";
import Productos from "../pages/Productos";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Inicio" element={<App />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;



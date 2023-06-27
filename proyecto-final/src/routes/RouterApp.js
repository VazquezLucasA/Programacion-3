import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Contacto from "../pages/Contact/Contacto";
import Productos from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Home from "../pages/Home";
import Register from "../pages/Register";

const RouterApp = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Productos">
          <Route index element={<Productos />}/>
          <Route path=":product_id" element={<Product />}/>
        </Route>
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;



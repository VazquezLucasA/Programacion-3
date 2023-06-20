import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import  {Link} from 'react-router-dom';
import App from "../App";


 


import React from 'react'

const RouterApp = () => {
  const Inicio = () => <h1>Home</h1>;
  const Contacto = () => <h1>Pet List</h1>;
  const Productos = () => <h1>Layout</h1>;

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/Inicio" element={<App />}></Route>
          <Route path="/Productos" element={<App />}></Route>
          <Route path="/Contacto" element={<App />}></Route>
          <Route path="/AboutUs" element={<App />}></Route>
          <Route path="/Login" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default RouterApp


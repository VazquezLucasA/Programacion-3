import React from 'react'
import './Aside.css'

function Aside() {
  return (
  <div className='links'>
    <h5 className='sub'>Modelos:</h5>
   <ul className='lista'>
  <li><a href="#">Samsung (30)</a></li>
  <li><a href="#">Apple (20)</a></li>
  <li><a href="#">Motorola (10)</a></li>
  <li><a href="#">LG (10)</a></li>
  <li><a href="#">Xiaomi (9)</a></li>
  <li><a href="#">Huawei (5)</a></li>
  <li><a href="#">ZTE (3)</a></li>
  <li><a href="#">TCL (2)</a></li>
  <li><a href="#">Alcatel (1)</a></li>
</ul>
<br></br>
<br></br>
  <h5 className='sub'>PhoneTup</h5>
  <ul className='lista'>
  <li><a href="#">Ingresar</a></li>
  <li><a href="#">¿Sos nuevo? Creáte una cuenta</a></li>
  <li><a href="#">Carrito</a></li>
  <li><a href="#">Favoritos</a></li>
  <li><a href="#">Especificaciones</a></li>
  <li><a href="#">Envíos</a></li>
  <li><a href="#">Sucursales</a></li>
  <li><a href="#">Correo Electrónico</a></li>
  <li><a href="#">Contacto</a></li>
</ul>
  </div>
  );
}

export default Aside;
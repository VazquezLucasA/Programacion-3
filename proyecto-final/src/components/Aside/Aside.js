import React from 'react'
import './Aside.css'

function Aside() {
  return (

<div className='links'>
  <h5 className='sub'>PhoneTup</h5>
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
</div>
  );
}

export default Aside;


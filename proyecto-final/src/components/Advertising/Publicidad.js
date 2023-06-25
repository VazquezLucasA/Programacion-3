import React from 'react'
import './Publicidad.css'
import publicidad1 from '../../assets/img/publicidad 1.jpg';
import publicidad2 from '../../assets/img/publicidad 2.jpg';
import publicidad3 from '../../assets/img/publicidad 3.jpg';

function Publicidad(){
    return(
        <div>
        <img src= {publicidad1} alt="publicidad 1" className="imagen-publicidad"/>
        <img src= {publicidad2} alt="publicidad 2" className="imagen-publicidad2"/>
        <img src= {publicidad3} alt="publicidad 3" className="imagen-publicidad3"/>
      </div>
    );
}

export default Publicidad
import React from 'react'
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel1 from '../../components/Carousel1';
import './AboutUs.css'


const AboutUs = () => {
  return (
    <>
      
      <Navbar/>
        <Carousel1/>
          <h1>¿Quiénes somos?</h1>
          <hr />
          <div className="parrafo">
            <p className='fst-italic'>
              PhoneTup ofrece una gran variedad de teléfonos celulares que puedes adquirir 
              a través de nuestra página. Somos tu lugar favorito a la hora de comprar una nueva adquisición para vos y tu comunicación.
              Somos un pequeño grupo de estudiantes de la Tecnicatura Universitaria en Programación que dicta la Universidad Tecnológica Nacional - Facultad Regional Tucumán que a través de su aprendizaje, decidimos lanzar
              nuestra primera página de productos a la web. ¡Gracias por confiar en nosotros!
            </p>
          </div>
           <div className="parrafo" style={{textAlign: 'center'}}>
            <p className='fst-italic'>
            "¡PhoneTUP te acompaña a tu mejor decisión!"
            </p>
        </div>
        
      <Footer/>
        
      
    </>
  )
}

export default AboutUs;
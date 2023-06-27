import React from 'react'
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel1 from '../../components/Slider/Slider';
import './AboutUs.css'


const AboutUs = () => {
  return (
    <>
      <div className="grid-layout">
        <div className="nav">
          <Navbar/>
        </div>
        <div className="header" style={{position: 'relative', top: '120px'}}>
          <Carousel1/>
        </div>
        <div className="main">
        <div className="tituloA" style={{position: 'relative', top: '350px', textAlign: 'center', right: '100px'}}>
            <h1>¿Quiénes somos?</h1>
          </div>
          <hr style={{position: 'relative', top: '350px', right: '100px'}} />
          <div className="parrafo" style={{position: 'relative', top: '400px', textAlign: 'center', right: '100px'}}>
            <p className='fst-italic'>
              PhoneTup ofrece una gran variedad de teléfonos celulares que puedes adquirir 
              a través de nuestra página. Somos tu lugar favorito a la hora de comprar una nueva adquisición para vos y tu comunicación.
              Somos un pequeño grupo de estudiantes de la Tecnicatura Universitaria en Programación que dicta la Universidad Tecnológica Nacional - Facultad Regional Tucumán que a través de su aprendizaje, decidimos lanzar
              nuestra primera página de productos a la web. ¡Gracias por confiar en nosotros!
            </p>
          </div>
           <div className="parrafo" style={{position: 'relative', top: '400px', textAlign: 'center', right: '100px'}}>
            <p className='fst-italic' style={{height: '400px', position: 'relative', top: '100px'}}>
            "¡PhoneTUP te acompaña a tu mejor decisión!"
            </p>
        </div>
        </div>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
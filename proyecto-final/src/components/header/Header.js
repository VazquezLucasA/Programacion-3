import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner01 from '../../assets/img/banner01.jpg'
import Banner02 from '../../assets/img/banner02.jpg'
import Banner03 from '../../assets/img/banner03.jpg'
import './Header.css';

function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-container'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner01}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner02}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner03}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
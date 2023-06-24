import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import s23 from '../../assets/img/s23 ultra.png';
import iphone from '../../assets/img/iphone 14 pro max 256.png';
import Motorola from '../../assets/img/edge30Ultra.png';
import Xiaomi from '../../assets/img/Xiaomi-12S-Ultra.png';
import ZTE from '../../assets/img/ZTE-Axon-40-Pro.png';
import TCL from '../../assets/img/tcl.png';
import Huawei from '../../assets/img/huawei-mate-xs.png';
import Alcatel from '../../assets/img/Alcatel.png';
import './CarrouselChico.css';

function CarrouselChico() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([
    {
      id: 1,
      image: s23,
      title: 'Samsung Galaxy',
    },
    {
      id: 2,
      image: iphone,
      title: 'Apple ¡Phone',
    },
    {
      id: 3,
      image: Motorola,
      title: 'Motorola',
    },
    {
        id: 4,
        image: Xiaomi,
        title: 'Xiaomi',
      },
      {
        id: 5,
        image: ZTE,
        title: 'ZTE',
      },
      {
        id: 6,
        image: TCL,
        title: 'TCL',
      },
      {
        id: 7,
        image: Huawei,
        title: 'Huawei',
      },
      {
        id: 8,
        image: Alcatel,
        title: 'Alcatel',
      },

  ]);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const renderCarouselItems = () => {
    const items = [];
    for (let i = 0; i < carouselData.length; i += 4) {
      const group = carouselData.slice(i, i + 4);
      const item = (
        <Carousel.Item key={i}>
          <div className="d-flex justify-content-center">
            {group.map((item) => (
              <Card key={item.id} className="custom-card">
                <Card.Img variant="top" src={item.image} className="custom-image" />
                <Card.Body className='body'>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      );
      items.push(item);
    }
    return items;
  };

  return (
         <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      pause="hover"
      interval={null}
      className="custom-carousel"
      indicators={false}
    >
      {renderCarouselItems()}
    </Carousel>
    
   
  );
}

export default CarrouselChico;

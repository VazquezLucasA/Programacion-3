import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

import './Item.css';


const Item = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card className='custom-card-container'>
        <Card.Img className='Card_img' variant="top" src={props.img}/>
        <Card.Body>
          <Card.Title className='titulo'>
            <strong>{props.name}</strong>
          </Card.Title>
          <Card.Subtitle>
            <h3>${props.price}<sup>00</sup></h3>
          </Card.Subtitle>
        </Card.Body>
        <Button onClick={()=>navigate(`/Productos/${props.id}`)}>Más información</Button>
      </Card>
    </div>
  )
}
export default Item;








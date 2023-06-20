import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import imagen from '../../assets/img/s23+.webp';
import './Item.css'


export const Item = (props) => {
  return (
    <div className='card-group'>
     <div className='col-md-3 m-4'>
    <Card className='custom-card-container'>
    <Card.Img variant="top" src={imagen}/>
    <Card.Body>
      <Card.Title className='titulo'><strong>{props.name}</strong></Card.Title>
      <Card.Text className='descripcion'>
        {props.descripcion}
      </Card.Text>
     <strong className='m-3 p-3'><small className='text-muted'>$̶6̶4̶9̶.̶9̶9̶9̶</small> <h5 className='off'>%30 OFF</h5></strong>
     <strong className='m-3 p-3'><h3 className='precio'>$455.999</h3></strong>
    <small className="text-muted envio">Envio gratis</small> 
    <small className="m-2 p-3 text-muted cuotas">6 cuotas sin interés</small> 
    </Card.Body>
    <div className='text-center'>
    <Button variant="primary" style={{ 
      backgroundColor: '#001946', 
      textAlign: 'center', 
      width: '100px', 
      position: 'relative', 
      bottom: '30px',
      border: 'none'
       }} className='ver'>VER MÁS</Button>
    </div>
  </Card>
  </div>
    </div>
  )
}








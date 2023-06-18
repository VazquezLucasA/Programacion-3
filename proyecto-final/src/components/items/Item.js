import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import imagen from '../../assets/img/s23+.webp';


export const Item = (props) => {
  return (
    <div className='col-md-2 m-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen}/>
      <Card.Body>
        <Card.Title><strong>{props.name}</strong></Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Button variant="primary" className='w-100'>Ver</Button>
      </Card.Body>
      <Card.Footer>
        <strong className='m-3 p-3 '>$300000</strong>
        <small className="text-muted">Envio gratis</small> 
      </Card.Footer>
    </Card>
    </div>

  )
}








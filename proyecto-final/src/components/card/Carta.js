import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React from 'react'
import s23 from '../../assets/img/s23+.webp';

function Carta() {
  return (
    <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={s23} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Carta
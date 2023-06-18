import s23 from '../../assets/img/s23.jpg'
import modelos from './Models';
import { Item } from './Item';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';


function List() {
  const  listModelos = modelos.map(modelo => 
    <Item name={modelo.name} img={modelo.img}/>
    )
  return (

    <>
    <CardGroup className='m-2'>
      {listModelos}
    </CardGroup> 
    </>
  );
}

export default List;


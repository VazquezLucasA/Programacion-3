import { useEffect, useState } from 'react';
import Item from './Item'
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
const endpoint = 'http://localhost:3000/Modelos'
function List() {
  const [models, setModels] = useState([])
  useEffect(()=>{
    axios.get(endpoint).then((response) => {
      console.log(response.data)
      setModels(response.data)
    })

  },[])
  return (
    <CardGroup className='m-2'>
      {models.map(model=>{
        console.log(model.img)
        return(
        
        <Item img={model.img} />
      )})}
      
      
      
      {/* {modelos.map(modelo => {

        console.log(modelo)
        return(
          
          <Item img={modelo.img}/>
        )
      })} */}
    </CardGroup> 
  );
}

export default List;


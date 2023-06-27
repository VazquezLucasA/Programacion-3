import { useEffect, useState } from 'react';
import Item from '../Item'
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
const endpoint = 'http://localhost:3000/Modelos'
function List() {
  const [models, setModels] = useState([])
  useEffect(()=>{
    axios.get(endpoint).then((response) => {
      setModels(response.data)
    })

  },[])
  return (
    <CardGroup>
      {models.map((model,index)=>{
        return(
        
        <Item key={index} {...model}/>
      )})}
      
    </CardGroup> 
  );
}

export default List;


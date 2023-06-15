import s23 from '../../assets/img/s23.jpg'
import modelos from './Models';
import { Item } from './Item';

function List() {
  return (

    <>
  
    {modelos.map((modelo) =>{return <Item name={modelo.name} img={modelo.img}/>}
    )}
    
    
  <img src={s23} width={"100px"}/>
  </>
  );
}

export default List;


{/* <>{modelo.name}<img src= {modelo.img} width={"100px"}/><br/></>  */}
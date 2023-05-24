import '../index.css';
import Titulo from './Titulo';

function Header(props){
return (
<div className='header'>
    <Titulo name={props.name}/>
</div>
);
}

export default Header;
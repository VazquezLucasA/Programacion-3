import '../index.css';

function Titulo(props){
return (
<div className='Titulo'>
    <h1>Hola {props.name}</h1>
</div>
);
}

export default Titulo;
import axios from 'axios';
import './Product.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Item from '../../components/Item';

const endpoint = 'http://localhost:3000/Modelos/';

const Product = ()=>{
	const [product, setProduct] = useState();
	const params = useParams();
	useEffect(()=>{

		axios.get(endpoint+params.product_id).then((response)=>{
			setProduct(response.data)
		})

	},[])
	
	return(
		<>
			<Header />
			<p>descripción: {product.descripcion}</p>
			<Item {...product}/>
			<Footer />
		</>
	);
};

export default Product;
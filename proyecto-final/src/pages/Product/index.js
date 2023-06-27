import axios from 'axios';
import './Product.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const endpoint = 'http://localhost:3000/Modelos/'

const Product = ()=>{
	const [product, setProduct] = useState();
	const params = useParams();
	useEffect(()=>{

		axios.get(endpoint+params.product_id).then((response)=>{
			setProduct(response.data)
		})

	},[])
	console.log(params.product_id)
	return(
		<>
			<a>{params.product_id}</a>
		</>
	);
};

export default Product;
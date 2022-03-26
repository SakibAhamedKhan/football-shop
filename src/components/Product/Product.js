import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
	// console.log(props.product);
	const {id, name, image, price} = props.product;
	// console.log(id, name, image, price);
	return (
		<div className='product'>
			<div className='img-part'><img src={image} alt=""/></div>
			<div className='info'>
				<h3>{name}</h3>
				<p>Price: ${price}</p>
			</div>
			<button className='cart-btn'>
				<p className='cart-btn-text'>Add to cart</p>
				<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Product;
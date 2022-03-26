import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
	const {id, name, image, price} = props.product;
	const {handleAddToCart} = props;
	// console.log(handleAddToCart);

	return (
		<div className='product'>
			<div className='img-part'><img src={image} alt=""/></div>
			<div className='info'>
				<h3>{name}</h3>
				<p>Price: ${price}</p>
			</div>
			<button className='cart-btn' onClick={()=> handleAddToCart(props.product)}>
				<p className='cart-btn-text'>Add to cart</p>
				<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Product;
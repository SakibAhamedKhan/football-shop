import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selected from '../Selected/Selected';
import './Shop.css'

const Shop = () => {
	const [product, setProduct] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect( () => {
		fetch('footballs.json')
		.then(res => res.json())
		.then(data => setProduct(data.football))
	}, [])

	const handleAddToCart = (product) => {
		let newCart = [];
		if(!cart){
			newCart = [product];
		} else{
			newCart = cart.find(p => p.id === product.id);
			if(newCart){
				alert('You have selected Again!!!');
				newCart = [...cart];
			} else{
				newCart = [...cart , product];
			}

			if(cart.length === 4){
				alert('You can not Selecte more than 4 item!!!');
				newCart = [...cart];
			}
			
		}
		setCart(newCart);
		
	}
	// console.log(cart);
	return (
		<div className='shop'>
			<div className='shop-product'>
				{
					product.map(p => <Product 
						key={p.id} 
						product={p}
						handleAddToCart={handleAddToCart}
						></Product>)
				}
			</div>
			<div className='shop-selected'>
				<h3 className='shop-selected-title'>Selected Product</h3>
				<Selected cart={cart}></Selected>
			</div>
		</div>
	);
};

export default Shop;
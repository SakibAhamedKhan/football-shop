import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
	const [product, setProduct] = useState([]);

	useEffect( () => {
		fetch('footballs.json')
		.then(res => res.json())
		.then(data => setProduct(data.football))
	}, [])
	return (
		<div className='shop'>
			<div className='shop-product'>
				{
					product.map(p => <Product 
						key={p.id} 
						product={p}
						></Product>)
				}
			</div>
			<div className='shop-selected'>
				Selected Product
			</div>
		</div>
	);
};

export default Shop;
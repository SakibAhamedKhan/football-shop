import React from 'react';
import Selecteditem from '../Selecteditem/Selecteditem';
import './Selected.css'

const Selected = (props) => {
	// console.log(props.cart);
	const {cart} = props;
	return (
		<div className='selected'>
			<div className='selected-item'>
				{
					cart.map(p => <Selecteditem 
						key={p.id} 
						cart={p}
						></Selecteditem>)
				}
			</div>
			
			<button className='random-choose-btn'>ChOOSE 1 FOR ME</button>
			<button className='choose-again-btn'>CHOOSE AGAIN</button>
		</div>
	);
};

export default Selected;
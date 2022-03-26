import React from 'react';
import Selecteditem from '../Selecteditem/Selecteditem';
import './Selected.css'

const Selected = (props) => {
	const {cart, randomChoose, chooseAgain} = props;
	
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
			
			<button className='random-choose-btn' onClick={ () => randomChoose(cart)}>ChOOSE 1 FOR ME</button>
			<button className='choose-again-btn' onClick={chooseAgain}>CHOOSE AGAIN</button>
		</div>
	);
};

export default Selected;
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Selecteditem.css'

const Selecteditem = (props) => {
	// console.log(props.cart)
	const {name, image} = props.cart;
	return (
		<div className='selecteditem'>
			<div className='selecteditem-img'>
				<img src={image} alt="" />
			</div>
			<div className='selecteditem-name'>
				<p>{name}</p>
			</div>
			<button className='selected-delete-btn'><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
		</div>
	);
};

export default Selecteditem;
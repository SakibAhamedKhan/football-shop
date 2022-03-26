import { faRemove, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Selecteditem.css'

const Selecteditem = (props) => {
	// console.log(props.cart)
	const {name, image} = props.cart;
	const {removeSpecificItem} = props;
	return (
		<div className='selecteditem'>
			<div className='selecteditem-img'>
				<img src={image} alt="" />
			</div>
			<div className='selecteditem-name'>
				<p>{name}</p>
			</div>
		
			<FontAwesomeIcon className='selected-delete-btn' onClick={()=>removeSpecificItem(props.cart)} icon={faTrash}></FontAwesomeIcon>
			
		</div>
	);
};

export default Selecteditem;
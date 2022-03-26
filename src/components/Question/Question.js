import React from 'react';
import './Question.css'

const Question = () => {
	return (
		<div className='question'>
			<h1 className='question-title'>Question & Answer</h1>
			<div className='qa'>
				<h3 className='qa-question'>Q: 1. How React Works?</h3>
				<p className='qa-ans'>Ans: React is a Javascript library for building one page Application. It's make a Complex Application with some small piece of Component. Components can reusable. React make a Virtual DOM as like Browser DOM. If any anything is change is Component, React create a new Virtual DOM and Compare it to Older Virtual DOM by using Diff Algorithm for find the change then update only to the specific change in the Browser DOM.</p>
			</div>
			<div className='qa'>
				<h3 className='qa-question'>Q: 2. Differents between props and state?</h3>
				<div className='table'>
					<div className='tr-props'>
						<h2>props</h2>
						<p>1. You can read Props data.</p>
						<p>2. Props can not modified.</p>
						<p>3. Child component can access the props.</p>
						<p>4. Props help to pass data one component to another component.</p>
						<p>5. By props you can reuse component.</p>
					</div>
					<div className='tr-state'>
						<h2>state</h2>
						<p>1. You can read and write state data.</p>
						<p>2. State can be modified.</p>
						<p>3. Child component can not access the state.</p>
						<p>4. State Keep data about component.</p>
						<p>5. By state you can not reuse component.</p>
					</div>
				</div>
			</div>
			<div className='qa'>
				<h3 className='qa-question'>Q: 3. How useState works?</h3>
				<p className='qa-ans'>Ans: The useState is hook where you can declare a variables and function. You can also initial the state. You can get data from this variable. You can Update data by this function. React can understand this change and update this change in virtual DOM by diff algorithm then set it to the Browser DOM. User can see the change.</p>
			</div>
		</div>
	);
};

export default Question;
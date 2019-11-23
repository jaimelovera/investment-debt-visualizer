import React from 'react';
import './InputValues.css';

function InputValues(props) {

	let investmentValues = [
		<div key={1}>
			<h1>Starting Amount:</h1>
			<input value={props.amount} onChange={props.changeAmount} placeholder='Required'/>
		</div>,
		<div key={2}>
			<h1>Monthly Contributions:</h1>
			<input value={props.payment} onChange={props.changePayment} placeholder='Required'/>
		</div>,
		<div key={3}>
			<h1>Annual Rate of Return:</h1>
			<input value={props.rate} onChange={props.changeRate} placeholder='Required'/>
		</div>,
		<div key={4}>
			<h1>Years to Grow:</h1>
			<input value={props.years} onChange={props.changeYears} placeholder='Required'/>
		</div>
	];

	let debtValues = [
		<div key={1}>
			<h1>Debt Amount:</h1>
			<input value={props.amount} onChange={props.changeAmount} placeholder='Required'/>
		</div>,
		<div key={2}>
			<h1>Monthly Payment:</h1>
			<input value={props.payment} onChange={props.changePayment} placeholder='Required'/>
		</div>,
		<div key={3}>
			<h1>Annual Percentage Rate:</h1>
			<input value={props.rate} onChange={props.changeRate} placeholder='Required'/>
		</div>
	];

	return (
		<div>
			{props.currentView === 'investment' ? investmentValues : debtValues}
		</div>
	);
}

export default InputValues;

import React from 'react'
import './InputValues.css'

function InputValues(props) {

	let investmentValues = (
		<div className='inputvalues-container'>
			<div className='inputvalues-item'>
				<h1>Starting Amount:</h1>
				<span className="inputvalues-input">$<input value={props.amount} onChange={props.changeAmount} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Monthly Contributions:</h1>
				<span className="inputvalues-input">$<input value={props.payment} onChange={props.changePayment} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Annual Rate of Return:</h1>
				<span className="inputvalues-input">%<input value={props.rate} onChange={props.changeRate} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Years to Grow:</h1>
				<span className="inputvalues-input">#<input value={props.years} onChange={props.changeYears} placeholder='Required'/></span>
			</div>
		</div>
	)

	let debtValues = (
		<div className='inputvalues-container'>
			<div className='inputvalues-item'>
				<h1>Debt Amount:</h1>
				<span className="inputvalues-input">$<input value={props.amount} onChange={props.changeAmount} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Monthly Payment:</h1>
				<span className="inputvalues-input">$<input value={props.payment} onChange={props.changePayment} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Annual Percentage Rate:</h1>
				<span className="inputvalues-input">%<input value={props.rate} onChange={props.changeRate} placeholder='Required'/></span>
			</div>
		</div>
	)

	return <React.Fragment>{props.currentView === 'investment' ? investmentValues : debtValues}</React.Fragment>
}

export default InputValues;

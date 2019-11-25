import React from 'react'
import './InputValues.css'

function InputValues(props) {

	let investmentValues = (
		<div className='inputvalues-container'>
			<div className='inputvalues-item'>
				<h1>Starting<br></br>Amount:</h1>
				<span className="inputvalues-input">$ <input value={props.amount} onChange={props.changeAmount} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Monthly<br></br>Contributions:</h1>
				<span className="inputvalues-input">$ <input value={props.payment} onChange={props.changePayment} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Annual Rate<br></br>of Return:</h1>
				<span className="inputvalues-input"><input value={props.rate} onChange={props.changeRate} placeholder='Required'/>%</span>
			</div>
			<div className='inputvalues-item'>
				<h1>Years to<br></br>Grow:</h1>
				<span className="inputvalues-input"><input value={props.years} onChange={props.changeYears} placeholder='Required'/></span>
			</div>
		</div>
	)

	let debtValues = (
		<div className='inputvalues-container'>
			<div className='inputvalues-item'>
				<h1>Debt<br></br>Amount:</h1>
				<span className="inputvalues-input">$ <input value={props.amount} onChange={props.changeAmount} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Monthly<br></br>Payment:</h1>
				<span className="inputvalues-input">$ <input value={props.payment} onChange={props.changePayment} placeholder='Required'/></span>
			</div>
			<div className='inputvalues-item'>
				<h1>Annual Interest<br></br>Rate:</h1>
				<span className="inputvalues-input"><input value={props.rate} onChange={props.changeRate} placeholder='Required'/>%</span>
			</div>
		</div>
	)

	return <React.Fragment>{props.currentView === 'investment' ? investmentValues : debtValues}</React.Fragment>
}

export default InputValues;

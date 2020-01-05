import React from 'react'
import './Description.css'

function Description(props) {

	let investmentDescription = (
		<React.Fragment>
			<h2>Investment Calculator</h2>
			<p>Determine how your money will grow over time with this free investment calculator.</p>
		</React.Fragment>
	)

	let debtDescription = (
		<React.Fragment>
			<h2>Debt Repayment Calculator</h2>
			<p>Determine how long it will take to payoff your debt with this free debt repayment calculator.</p>
		</React.Fragment>
	)
	return (
		<div className='description-container'>
			{props.currentView === 'investment' ? investmentDescription : debtDescription}
  		</div>
	);
}

export default Description;

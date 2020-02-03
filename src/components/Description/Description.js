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
			<h2>Loan Payoff Calculator</h2>
			<p>Determine how long it will take you to payoff your debt with this free calculator.</p>
		</React.Fragment>
	)
	return (
		<div className='description-container'>
			{props.currentView === 'investment' ? investmentDescription : debtDescription}
  		</div>
	);
}

export default Description;

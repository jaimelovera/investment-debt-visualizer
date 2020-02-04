import React from 'react'
import './Description.css'

function Description(props) {

	let investmentDescription = (
		<React.Fragment>
			<h2>Investment Calculator</h2>
			<p>See how your money will grow over time with compunded interest. <a href="https://www.getmoneystaybummy.com/investing">Learn more</a>.</p>
		</React.Fragment>
	)

	let debtDescription = (
		<React.Fragment>
			<h2>Loan Payoff Calculator</h2>
			<p>See how long it will take to pay off your loan, and how much in interest you will pay. <a href="https://www.getmoneystaybummy.com/debt">Learn more</a>.</p>
		</React.Fragment>
	)
	return (
		<div className='description-container'>
			{props.currentView === 'investment' ? investmentDescription : debtDescription}
  		</div>
	);
}

export default Description;

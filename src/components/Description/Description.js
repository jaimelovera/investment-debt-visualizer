import React from 'react'
import './Description.css'

function Description(props) {

	let investmentDescription = (
		<React.Fragment>
			<h2>Investment Calculator</h2>
			<p>This calculator will give a visual representation of how invested money can grow. The goal of this chart is to encourage people to think long term and to take advantage of compound interest. Visit our various articles to learn more.</p>
		</React.Fragment>
	)

	let debtDescription = (
		<React.Fragment>
			<h2>Debt Repayment Calculator</h2>
			<p>This calculator will give a visual representation of how debt can grow. The goal of this chart is to encourage people to quickly pay off debt, and to encur less of it.</p>
		</React.Fragment>
	)
	return (
		<div className='description-container'>
			{props.currentView === 'investment' ? investmentDescription : debtDescription}
  		</div>
	);
}

export default Description;

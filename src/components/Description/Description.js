import React from 'react'
import './Description.css'

function Description(props) {

	let investmentDescription = (
		<React.Fragment>
			<h2>Investment Calculator</h2>
			<p>A visual representation of how money grows over time.</p>
		</React.Fragment>
	)

	let debtDescription = (
		<React.Fragment>
			<h2>Debt Repayment Calculator</h2>
			<p>A visual representation of debt repayment. </p>
		</React.Fragment>
	)
	return (
		<div className='description-container'>
			{props.currentView === 'investment' ? investmentDescription : debtDescription}
  		</div>
	);
}

export default Description;

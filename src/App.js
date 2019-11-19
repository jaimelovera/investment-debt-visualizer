import React from 'react';
import TypeSwitcher from './components/TypeSwitcher/TypeSwitcher.js';
import InputValues from './components/InputValues/InputValues.js';
import Charts from './components/Charts/Charts.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: 'investment',
			amount: '1000',
			payment: '50',
			rate: '8',
			years: '10'
		};
	}

	handleCurrentViewChange = (e) => {
		if(e.target.value === 'investment') {
			this.setState({
				currentView: 'investment',
				amount: '1000',
				payment: '50',
				rate: '8',
				years: '10'
			});
		}
		else if(e.target.value === 'debt') {
			this.setState({
				currentView: 'debt',
				amount: '1000',
				payment: '50',
				rate: '19',
				years: '10'
			});
		}
	}

	handleAmountChange = (e) => {
		if (e.target.value === '' || (/^\d+$/.test(e.target.value) && e.target.value <= 1000000000) ) {
			this.setState({amount: e.target.value.replace(/^0/, '').split(" ").join("")});
		};
	}

	handlePaymentChange = (e) => {
		if (e.target.value === '' || (/^\d+$/.test(e.target.value) && e.target.value <= 100000000) ) {
			this.setState({payment: e.target.value.replace(/^0/, '').split(" ").join("")});
		};
	}

	handleRateChange = (e) => {
		let decimalPlaces = e.target.value.includes(".") ? e.target.value.split(".")[1].length : 0;
		if (e.target.value === '' || e.target.value === '.' || (!isNaN(e.target.value) && e.target.value <= 100 && decimalPlaces <= 2 )) {
			
			let val = e.target.value;
			if (/^0+\d/.test(e.target.value)) {
				val = val.substr(1);
			};
			if (/^\./.test(e.target.value)) {
				val = '0.';
			};
			this.setState({rate: val.split(" ").join("")});
		};

	}

	handleYearsChange = (e) => {
		if (e.target.value === '' || (/^\d+$/.test(e.target.value) && e.target.value <= 100)) {
			this.setState({years: e.target.value.replace(/^0/, '').split(" ").join("")});
		};
	}

	render() {
		return (
			<React.Fragment>
				<TypeSwitcher
					currentView = {this.state.currentView}
					changeCurrentView = {this.handleCurrentViewChange}
				/>
				<InputValues
					currentView = {this.state.currentView}
					amount = {this.state.amount}
					payment = {this.state.payment}
					rate = {this.state.rate}
					years = {this.state.years}
					changeAmount = {this.handleAmountChange}
					changePayment = {this.handlePaymentChange}
					changeRate = {this.handleRateChange}
					changeYears = {this.handleYearsChange}
				/>
				<Charts/>
			</React.Fragment>
		);
	}
}

export default App;

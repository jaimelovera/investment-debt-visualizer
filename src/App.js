import React from 'react'
import TypeSwitcher from './components/TypeSwitcher/TypeSwitcher'
import InputValues from './components/InputValues/InputValues'
import Charts from './components/Charts/Charts'
import Description from './components/Description/Description'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: 'investment',
			amount: '1,000',
			payment: '100',
			rate: '8',
			years: '20'
		}
		this.baseState = this.state
	}

	handleCurrentViewChange = (e) => {
		if(e.target.value === 'investment') {
			this.setState(this.baseState)
		}
		else if(e.target.value === 'debt') {
			this.setState({
				currentView: 'debt',
				amount: '5,000',
				payment: '100',
				rate: '16',
				years: '0'
			})
		}
	}

	handleAmountChange = (e) => {
		/* Dont allow spaces. Also remove the commas from the formated value. Since the state will be stored in
		   the comma formatted number so the input text field looks nice. */
		let val = e.target.value.split(",").join("").split(" ").join("")
		if(val !== ''){
			val = parseInt(val)
		}
		if (val === '' || (/^\d+$/.test(val) && val <= 10000000) ) {
			if (/^0+\d/.test(val)) {
				val = val.substr(1);
			}
			this.setState({amount: val.toLocaleString()});
		}
	}

	handlePaymentChange = (e) => {
		/* Dont allow spaces. Also remove the commas from the formated value. Since the state will be stored in
		   the comma formatted number so the input text field looks nice. */
		let val = e.target.value.split(",").join("").split(" ").join("")
		if(val !== ''){
			val = parseInt(val)
		}
		if (val === '' || (/^\d+$/.test(val) && val <= 1000000) ) {
			if (/^0+\d/.test(val)) {
				val = val.substr(1);
			}
			this.setState({payment: val.toLocaleString()});
		}
	}

	handleRateChange = (e) => {
		let decimalPlaces = e.target.value.includes(".") ? e.target.value.split(".")[1].length : 0;
		if (e.target.value === '' || e.target.value === '.' || (!isNaN(e.target.value) && e.target.value <= 100 && decimalPlaces <= 2 )) {
			
			let val = e.target.value;
			if (/^0+\d/.test(e.target.value)) {
				val = val.substr(1);
			}
			if (/^\./.test(e.target.value)) {
				val = '0.';
			}
			this.setState({rate: val.split(" ").join("")});
		}

	}

	handleYearsChange = (e) => {
		if (e.target.value === '' || (/^\d+$/.test(e.target.value) && e.target.value <= 100)) {
			let val = e.target.value;
			if (/^0+\d/.test(e.target.value)) {
				val = val.substr(1);
			}
			this.setState({years: val.split(" ").join("")});
		}
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
				<Charts
					currentView = {this.state.currentView}
					amount = {this.state.amount}
					payment = {this.state.payment}
					rate = {this.state.rate}
					years = {this.state.years}
					/>
				<Description 
					currentView = {this.state.currentView}
					/>
			</React.Fragment>
		);
	}
}

export default App;

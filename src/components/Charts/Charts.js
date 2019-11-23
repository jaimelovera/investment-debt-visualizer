import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import './Charts.css'

function Charts(props) {

	/* Set parameter defaults for when no value is inputted. */
	let data = []
	let currYear = (new Date).getFullYear()
	let years = 0
	if(props.years != ''){
		years = parseInt(props.years)
	}
	let rate = 0
	if(props.rate != ''){
		rate = parseInt(props.rate)/100
	}
	let payment = 0
	if(props.payment != ''){
		payment = parseInt(props.payment)
	}
	let amount = 0
	if(props.amount != ''){
		amount = parseInt(props.amount)
	}


	/* Populate data if viewing an investment chart. */
	if (props.currentView === 'investment'){
		let contributions = amount
		let total = amount

		data.push({Year: currYear, Total: total, Contributions: contributions, Interest: total - contributions})

		for(let i = 1; i <= years; i++){
			/* Loop over 12 months */
			for(let i = 0; i < 12; i++){
				total = total * (1+rate/12) + payment
				contributions += payment
			}
			let roundedTotal = Math.round(total).toFixed(0)
			data.push({Year: currYear+i, Total: roundedTotal, Contributions: contributions, Interest: roundedTotal - contributions})
		}
	}

	/* Populate data if viewing an debt chart. */
	if (props.currentView === 'debt'){
		let total = amount
		let principal = amount
		let monthlyRate = rate/12

		data.push({Year: currYear, Total: total, Principal: principal, Interest: total - principal})
		let limit = currYear + 40

		/* Run until debt is paid off, or only until the 100th year if it takes longer to pay off total with given parameters. */
		while(total > 0 && currYear < limit) {
			/* Loop over 12 months */
			for(let i = 0; i < 12; i++){
				total = total * (1+monthlyRate)
				total -= payment
				principal -= payment
			}
			currYear += 1
			let roundedTotal = Math.round(total).toFixed(0)

			/* Check if the principal get paid of next iteration. */
			if(principal < 0){
				/* Check if the total balance is paid of next iteration. */
				if(total > 0){
					data.push({Year: currYear, Total: roundedTotal, Principal: 0, Interest: roundedTotal - 0})
				}
				else{
					data.push({Year: currYear, Total: 0, Principal: 0, Interest: 0})
					break
				}
			}
			else{
				data.push({Year: currYear, Total: roundedTotal, Principal: principal, Interest: roundedTotal - principal})
			}
		}
	}

	/* Customize the barcharts tooltip. */
	let CustomTooltip = ({ active, payload, label }) => {
	  if (active) {
	    return (
	      <div className="charts-custom-tooltip">
	      	<p className="charts-label">{`${label}`}</p>
	        <p className="charts-label-total">{`Total : ${payload[0].value+payload[1].value}`}</p>
	        <p className="charts-label-contributions">{`${payload[0].name} : ${payload[0].value}`}</p>
	       	<p className="charts-label-interest">{`${payload[1].name} : ${payload[1].value}`}</p>
	      </div>
	    );
	  }
	  return null;
	};

	return (
		<React.Fragment>
			<ResponsiveContainer width={700} height={300}>
				<BarChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0,}}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="Year" />
					<YAxis />
					<Tooltip content={<CustomTooltip />} />
					<Bar type="monotone"
						  dataKey={props.currentView === 'investment' ? 'Contributions' : 'Principal'}
						  stackId="1"
						  stroke="#82ca9d"
						  fill="#82ca9d"
						  />
					<Bar type="monotone"
						  dataKey="Interest"
						  stackId="1"
						  stroke="#ffc658"
						  fill="#ffc658"
						  />
				</BarChart>
			</ResponsiveContainer>
  		</React.Fragment>
	);
}

export default Charts;

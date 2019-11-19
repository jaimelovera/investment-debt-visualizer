import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import './Charts.css';

//TO-DO: Generate data from the props, design the chart, maybe add a pie chart?
function Charts(props) {
	let data = [{name: '2019', total: 10}, 
				{name: 'Year 2', total: 15}, 
				{name: 'Year 3', total: 20},
				{name: 'Year 4', total: 25},
				{name: 'Year 5', total: 30},
				{name: 'Year 6', total: 35},
				{name: 'Year 7', total: 40},
				{name: 'Year 8', total: 45},
				{name: 'Year 9', total: 50},
				{name: 'Year 10', total: 55}]
	return (
		<React.Fragment>
			<div>Hello from Charts</div>
			<ResponsiveContainer width={700} height={300}>
				<AreaChart
					data={data}
					margin={{top: 10, right: 30, left: 0, bottom: 0,}}
					>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="total" stackId="1" stroke="#8884d8" fill="#8884d8" />
					<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
					<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
				</AreaChart>
			</ResponsiveContainer>
  		</React.Fragment>
	);
}

export default Charts;

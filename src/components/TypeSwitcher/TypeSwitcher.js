import React from 'react';
import './TypeSwitcher.css';

function TypeSwitcher(props) {
	return (
		<div className='typeswitcher-container'>
			<button value='investment' onClick={props.changeCurrentView} style={props.currentView === 'investment' ? {backgroundColor: '#14A700'} : {} }>INVESTMENT</button>
			<button value='debt' onClick={props.changeCurrentView} style={props.currentView === 'debt' ? {backgroundColor: '#14A700'} : {} }>DEBT</button>
		</div>
	);
}

export default TypeSwitcher;

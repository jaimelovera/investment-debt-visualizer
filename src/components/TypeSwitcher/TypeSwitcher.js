import React from 'react';
import './TypeSwitcher.css';

function TypeSwitcher(props) {
	return (
		<div className='typeswitcher-container'>
			<button value='investment' onClick={props.changeCurrentView} className={props.currentView === 'investment' ? 'typeswitcher-button-pressed' : {} }>INVESTMENT</button>
			<button value='debt' onClick={props.changeCurrentView} className={props.currentView === 'debt' ? 'typeswitcher-button-pressed' : {} }>LOAN</button>
		</div>
	);
}

export default TypeSwitcher;

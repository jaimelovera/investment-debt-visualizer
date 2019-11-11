import React from 'react';
import './TypeSwitcher.css';

function TypeSwitcher(props) {
	return (
		<React.Fragment>
			<button value='investment' onClick={props.changeCurrentView}>INVESTMENTS</button>
			<button value='debt' onClick={props.changeCurrentView}>DEBT</button>
		</React.Fragment>
	);
}

export default TypeSwitcher;

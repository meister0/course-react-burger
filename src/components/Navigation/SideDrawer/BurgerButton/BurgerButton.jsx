import React from 'react';

import classes from './BurgerButton.module.css';

const BurgerButton = (props) => {
	let attachedClasses = [
		classes.Container,
		props.changed ? classes.Change : null,
	].join(' ');
	return (
		<div className={attachedClasses} onClick={props.clicked}>
			<div className={classes.Bar1}></div>
			<div className={classes.Bar2}></div>
			<div className={classes.Bar3}></div>
		</div>
	);
};
export default BurgerButton;

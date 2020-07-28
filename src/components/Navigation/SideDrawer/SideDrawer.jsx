import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilliary from '../../../hoc/Auxilliary';
import BurgerButton from './BurgerButton/BurgerButton';

const SideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<Auxilliary>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<div className={classes.BurgerButton}>
					<BurgerButton clicked={props.closed} changed />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxilliary>
	);
};

export default SideDrawer;

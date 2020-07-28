import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerButton from '../SideDrawer/BurgerButton/BurgerButton';

const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<BurgerButton clicked={props.menuClicked} />
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default Toolbar;

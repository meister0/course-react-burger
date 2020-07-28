import React, { Component } from 'react';

import Auxilliary from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	//This could be a funct comp, doesn't have to be a class
	componentDidUpdate() {
		console.log('[OrderSummary.jsx] will update');
	}
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			(igKey) => {
				return (
					<li key={igKey}>
						<span style={{ textTransofrm: 'capitalize' }}>{igKey}</span>:
						{this.props.ingredients[igKey]}
					</li>
				);
			}
		);
		return (
			<Auxilliary>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: {this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout?</p>

				<Button btnType="Danger" clicked={this.props.purchaseCanceled}>
					CANCEL
				</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</Auxilliary>
		);
	}
}

export default OrderSummary;

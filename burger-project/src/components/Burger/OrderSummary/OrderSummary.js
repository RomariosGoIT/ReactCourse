import React, { Component } from 'react';
import Aux from '../../../hoc/Auxi/Auxius';
import Button from '../../UI/Buttons/Button'


class OrderSummary extends Component { 

    // This component can be just functional component, not class

    // componentWillUpdate () {
    //     console.log('[OrderSummary] WillUpdate');
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {

            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the folowing ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.totalPrice.toFixed(2)} UAH</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
}};


export default OrderSummary;
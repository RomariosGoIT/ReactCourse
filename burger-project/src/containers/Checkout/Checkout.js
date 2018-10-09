import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    chekoutCancelHandler = () => {
        this.props.history.goBack();
    }

    chekoutContinueHandler = () => {
        this.props.history.replace('/chekout/contact-data')
    }

    render () {

        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                chekoutCancel={this.chekoutCancelHandler}
                chekoutContinue={this.chekoutContinueHandler}/>
            </div>
        )
    }
} 

export default Checkout;
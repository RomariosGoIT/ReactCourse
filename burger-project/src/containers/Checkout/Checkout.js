import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ConatacData from './ContactData/ContactData';

import { connect } from 'react-redux';


class Checkout extends Component {

    chekoutCancelHandler = () => {
        this.props.history.goBack();
    }

    chekoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render () {
        let summary = <Redirect to='/'/>
        if (this.props.ings) {
            summary = (
                <div>
                    <CheckoutSummary 
                    ingredients={this.props.ings}
                    chekoutCancel={this.chekoutCancelHandler}
                    chekoutContinue={this.chekoutContinueHandler}/>
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={ConatacData} />
                </div>
            );
        }
        return summary;
    }
} 

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients
    }
}



export default connect(mapStateToProps) (Checkout);
import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
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

        return (
            <div>
                <CheckoutSummary 
                ingredients={this.props.ings}
                chekoutCancel={this.chekoutCancelHandler}
                chekoutContinue={this.chekoutContinueHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ConatacData} />
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}



export default connect(mapStateToProps) (Checkout);
import React, { Component } from 'react';
import Aux from '../../hoc/Auxius';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGRIDIENT_PRICES = {
    salad: 5,
    bacon: 15,
    cheese: 7,
    meat: 20
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 15
    }

    addIngridientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingredients
        };
        updatedIngridients[type] = updateCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngridients
        })
    }

    removeIngridientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingredients
        };
        updatedIngridients[type] = updateCount;
        const priceDeduction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngridients
        })
    }
    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingrAdded={this.addIngridientHandle} 
                ingrRemoved={this.removeIngridientHandle}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
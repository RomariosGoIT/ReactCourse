import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxius';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandle from '../../hoc/withErrorHandle/withErrorHandle';
import { connect } from 'react-redux';
import * as actionsType from '../../store/actions';

const INGRIDIENT_PRICES = {
    salad: 5,
    bacon: 15,
    cheese: 7,
    meat: 20
}
class BurgerBuilder extends Component {

    state = {
        totalPrice: 0,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        axios.get('/ingridients.json')
        .then(response =>{
            this.setState({ingredients: response.data})
        })
        .catch(error => this.setState({error: error}))
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        },0);

        this.setState({
            purchaseable: sum > 0
        })
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
        this.updatePurchaseState(updatedIngridients)
    }

    removeIngridientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
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
        this.updatePurchaseState(updatedIngridients)
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        console.log(this.props)
        // alert('You continue!');        
        
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    }

    render () {
        const disableInfo = {
            ...this.props.ings
        }

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? <p style={{textAlign:'center'}}>Ingredients can't be loaded!</p> : <Spinner/>;

        if(this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                    ingrAdded={this.props.onIgredientAdded} 
                    ingrRemoved={this.props.onIgredientRemoved}
                    purchaseble={this.state.purchaseable}
                    disable={disableInfo}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
                </Aux>
        );
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                totalPrice={this.state.totalPrice} />
        }

        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} loader={this.state.loading}>
                    {orderSummary}
                </Modal>                
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIgredientAdded: (ingName) => dispatch({type: actionsType.ADD_INGREDIENTS, ingredientName: ingName}),
        onIgredientRemoved: (ingName) => dispatch({type: actionsType.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandle(BurgerBuilder, axios));
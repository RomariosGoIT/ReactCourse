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


class BurgerBuilder extends Component {

    state = {
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

         return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
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
                    purchaseble={this.updatePurchaseState(this.props.ings)}
                    disable={disableInfo}
                    ordered={this.purchaseHandler}
                    price={this.props.price} />
                </Aux>
        );
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                totalPrice={this.props.price} />
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
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIgredientAdded: (ingName) => dispatch({type: actionsType.ADD_INGREDIENTS, ingredientName: ingName}),
        onIgredientRemoved: (ingName) => dispatch({type: actionsType.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandle(BurgerBuilder, axios));
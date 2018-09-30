import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxius';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandle from '../../hoc/withErrorHandle/withErrorHandle'

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
        totalPrice: 0,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount () {
        axios.get('/ingridients.json')
        .then(response=>{
            this.setState({ingredients: response.data})
        })
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
        // alert('You continue!');        
        this.setState({loading: true});
        
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Romarios',
                address:{ 
                street: 'Perova 1',
                zipCode: '23453',
                country: 'Kiev'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        
        axios.post('/orders.json', order)
        .then(responce => {
            this.setState({loading: false, purchasing: false})
        })
        .catch(error => {
            this.setState({loading: false, purchasing: false})
        });
    }

    render () {
        const disableInfo = {
            ...this.state.ingredients
        }

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice} />

        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} loader={this.state.loading}>
                    {orderSummary}
                </Modal>                
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingrAdded={this.addIngridientHandle} 
                ingrRemoved={this.removeIngridientHandle}
                purchaseble={this.state.purchaseable}
                disable={disableInfo}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default withErrorHandle(BurgerBuilder, axios);
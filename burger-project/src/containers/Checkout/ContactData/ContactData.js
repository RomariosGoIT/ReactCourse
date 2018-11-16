import React, { Component } from 'react';
import Button from '../../../components/UI/Buttons/Button';
// import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as orderActions from '../../../store/actions/index';
import withErrorHandle from '../../../hoc/withErrorHandle/withErrorHandle';
import { updateObject, checkValidity } from '../../../shared/utility';
import Aux from '../../../hoc/Auxi/Auxius';
import Modal from '../../../components/UI/Modal/Modal';
 
class ContactData extends Component {
    state = {
        orderForm : {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Conde...'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 5,
                    minLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Contry...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail...'
                },
                value: '',
                validation: {
                    isEmail: true,
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastes', displayValue: 'Fastes'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastes',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        purchasing: true, 
        loading: true
    }    

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        }

        this.props.onOrderHandler(order, this.props.token);       
        
    }

    inputChangeHandler = (event, elementId) => {
       
        const updatedValue = updateObject(this.state.orderForm[elementId], {
            value: event.target.value,
            valid: checkValidity( event.target.value, this.state.orderForm[elementId].validation),
            touched: true
        });

        const updatedOrderForm = updateObject(this.state.orderForm,{
            [elementId]: updatedValue
        }); 
        
        let formIsValid = true;
        for (let validationInentifer in updatedOrderForm) {
            formIsValid = updatedOrderForm[validationInentifer].valid && formIsValid;
        }        
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    render () {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(fromElement =>(
                    <Input
                        key={fromElement.id} 
                        elementType={fromElement.config.elementType}
                        elementConfig={fromElement.config.elementConfig}
                        value={fromElement.config.value}
                        invalid={!fromElement.config.valid}
                        shouldValidate={fromElement.config.validation}
                        touched={fromElement.config.touched}
                        changed={(event) => this.inputChangeHandler(event, fromElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner/>
        }
        return (
            // <div className={classes.ContactData}>   
            //     <h4>Enter your Contact Data</h4>
            //     {form}
            // </div>            
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} loader={this.state.loading}>
                    <h4>Enter your Contact Data</h4>
                    {form}
                </Modal>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onOrderHandler: (orderData, token) => dispatch(orderActions.purchaseBurger(orderData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandle(ContactData, axios));
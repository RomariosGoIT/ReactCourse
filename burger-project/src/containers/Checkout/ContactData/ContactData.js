import React, { Component } from 'react';
import Button from '../../../components/UI/Buttons/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

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
                    minLength: 5
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
                valid: false
            }
        },
        formIsValid: false,
        loading: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length >= 5 && isValid;
        }

        if (rules.minLength) {
            isValid = value.length <= 5 && isValid;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for (let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData
        }
        
        axios.post('/orders.json', order)
        .then(responce => {
            this.setState({loading: false, purchasing: false});
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({loading: false, purchasing: false});
        });
    }

    inputChangeHandler = (event, elementId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedValue = {
            ...updatedOrderForm[elementId]
        };
        updatedValue.value = event.target.value;
        updatedValue.valid = this.checkValidity(updatedValue.value, updatedValue.validation)
        updatedOrderForm[elementId] = updatedValue;
        updatedValue.touched = true;
        let formIsValid = true;
        for (let validationInentifer in updatedOrderForm) {
            formIsValid = updatedOrderForm[validationInentifer].valid && formIsValid;
        }        
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
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
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>   
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
import React, { Component } from 'react';
import Button from '../../../components/UI/Buttons/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            steet: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
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
            this.setState({loading: false, purchasing: false});
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({loading: false, purchasing: false});
        });
    }

    render () {
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name.." />
                <Input inputtype="input" type="email" name="email" placeholder="Your Email.." />
                <Input inputtype="input" type="text" name="steet" placeholder="Steet.." />
                <Input inputtype="input" type="text" name="postalCode" placeholder="PostalCode.." />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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
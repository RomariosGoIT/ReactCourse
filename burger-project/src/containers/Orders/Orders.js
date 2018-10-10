import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandle/withErrorHandle';

class Orders extends Component {

    state = {
        order: [],
        loading: true
    }

    componentDidMount () {
        axios.get('/orders.json')
        .then(res=>{
            const fetchOrders = [];
            for (let key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({loading: false, order: fetchOrders});
        })
        .catch(err=>{
            this.setState({loading: false});
        })
    }   

    render () {
        return (
            <div>
                 {this.state.order.map(order =>(
                     <Order 
                     key={order.id}
                     ingredients={order.ingredients}
                     price={order.price} />
                 ))}
            </div>              
        )
    }
}

export default withErrorHandler(Orders, axios);
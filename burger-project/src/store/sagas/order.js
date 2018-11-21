import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-orders';

export function* purchaseBurgerSaga (action) {
    yield put(actions.purchaseBurgerStart());
    yield put(actions.purchaseOrderSuccess(true));
    try {
        const responce = yield axios.post('/orders.json?auth=' + action.token, action.orderData);
        yield put(actions.purchaseBurgerSuccess(responce.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error));
    }
};

export function* fetchOrdersSaga (action) {
    yield put(actions.fetchOrdersStart());
    try {
        const queryParam = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        const responce = yield axios.get('/orders.json' + queryParam); 
        const fetchOrders = [];
        for (let key in responce.data) {
            fetchOrders.push({
                ...responce.data[key],
                id: key
        })};               
        yield put(actions.fetchOrdersSucces(fetchOrders));
    } catch(error) {
        yield put(actions.fetchOrdersFail(error));
    }   
};
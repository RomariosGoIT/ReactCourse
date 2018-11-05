import * as actionTypes from '../actions/actionTypes';
import * as refactor from './refactoring/refactorOrders';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return refactor.purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return refactor.purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return refactor.purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return refactor.purchaseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_START: return refactor.fetchOrderStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return refactor.fetchOrdersSuccess(state, action);            
        case actionTypes.FETCH_ORDERS_FAIL: return refactor.fetchOrdersFail(state, action);            
        default:
            return state
    }
};

export default reducer;
import * as actionTypes from '../actions/actionTypes';
import * as refactor from './refactoring/refactorBurger';

const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false,
    building: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENTS: return refactor.addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return refactor.removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return refactor.setIngredient(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return refactor.fetchIngredientFailed(state, action);
        default: return state
    }
};

export default reducer;
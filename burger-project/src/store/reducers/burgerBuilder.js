import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false
};

const INGRIDIENT_PRICES = {
    salad: 5,
    bacon: 15,
    cheese: 7,
    meat: 20
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGRIDIENT_PRICES[action.ingredientName]
            }

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGRIDIENT_PRICES[action.ingredientName]
            }
        
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                    bacon: action.ingredients.bacon
                },
                totalPrice: 0,
                error: false
            }
        
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }

        default:
            return state
    }

}

export default reducer;
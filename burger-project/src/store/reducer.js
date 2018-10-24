import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0

    },
    totalPrice: 0,
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

        default:
            return state
    }

}

export default reducer;
import { updateObject } from '../../../shared/utility';


const INGRIDIENT_PRICES = {
    salad: 5,
    bacon: 15,
    cheese: 7,
    meat: 20
}

export const addIngredient = (state, action) => {
    const updateIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updateIngredient);
    const updateState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGRIDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updateState);
};

export const removeIngredient = (state, action) => {
    const updateIngr = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngrs = updateObject(state.ingredients, updateIngr);
    const updateSt = {
        ingredients: updatedIngrs,
        totalPrice: state.totalPrice - INGRIDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updateSt);
};

export const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
            bacon: action.ingredients.bacon
        },
        totalPrice: 0,
        error: false,
        building: false
    }); 
};

export const fetchIngredientFailed = (state, action) => {
    return updateObject(state, {error: true});
};

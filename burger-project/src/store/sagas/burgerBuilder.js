import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

import axios from '../../axios-orders';


export function* initIgredientsSaga (action) {
    const response = yield axios.get('/ingridients.json');
    try {
        yield put(actions.setIngredients(response.data));
    } catch (error) {
        yield put(action.fethIgredientsFailed());
    }   
};
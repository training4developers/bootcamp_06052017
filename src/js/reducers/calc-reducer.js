import { actionTypes } from '../action-types';

export const calcReducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.add:
            return state + action.value;
        case actionTypes.subtract:
            return state - action.value;
        case actionTypes.multiply:
            return state * action.value;
        case actionTypes.divide:
            return state / action.value;
        default:
            return state;
    }
};
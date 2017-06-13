import { actionTypes } from '../action-types';

export const calcReducer = (state = { result: 0, operations: [] }, action) => {
    switch (action.type) {
        case actionTypes.add:
            return Object.assign({}, state, {
                result: state.result + action.value,
                operations: state.operations.concat({ name: 'add', value: action.value}),
            });
        case actionTypes.subtract:
            return Object.assign({}, state, {
                result: state.result - action.value
            });
        case actionTypes.multiply:
            return Object.assign({}, state, {
                result: state.result * action.value
            });
        case actionTypes.divide:
            return Object.assign({}, state, {
                result: state.result / action.value
            });
        default:
            return state;
    }
};
import { actionTypes } from '../action-types';

export const carReducer = (state = { cars: [] }, action) => {
    switch (action.type) {
        case actionTypes.REFRESH_REQUEST:
            // you could set the state to some value to display a spinner
            return state;
        case actionTypes.REFRESH_DONE:
            return Object.assign({}, state, {
                cars: action.cars,
            });
        default:
            return state;
    }
};
import { actionTypes } from '../action-types';

export const carReducer = (state = { cars: [] }, action) => {
    switch (action.type) {
        case actionTypes.add:
            return Object.assign({}, state, {
                cars: state.cars.concat(action.car),
            });
        default:
            return state;
    }
};
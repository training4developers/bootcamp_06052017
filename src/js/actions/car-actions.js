import { actionTypes } from '../action-types';

const refreshRequestActionCreator = () =>
    ({ type: actionTypes.REFRESH_REQUEST });

const refreshDoneActionCreator = cars =>
    ({ type: actionTypes.REFRESH_DONE, cars });

export const refresh = () => {

    return dispatch => {

        dispatch(refreshRequestActionCreator());

        return fetch('http://localhost:3010/cars')
            .then(res => res.json())
            .then(cars => dispatch(refreshDoneActionCreator(cars)));
    };
};
import { actionTypes } from '../action-types';

export const addActionCreator = value => ({ type: actionTypes.add, value });
export const subtractActionCreator = value => ({ type: actionTypes.subtract, value });
export const multiplyActionCreator = value => ({ type: actionTypes.multiply, value });
export const divideActionCreator = value => ({ type: actionTypes.divide, value });

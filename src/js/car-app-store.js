import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { carReducer } from './reducers/car-reducer';

export const carAppStore = createStore(carReducer, applyMiddleware(thunk));

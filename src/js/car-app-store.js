import { createStore } from 'redux';

import { carReducer } from './reducers/car-reducer';

export const carAppStore = createStore(carReducer);

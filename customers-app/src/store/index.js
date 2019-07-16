import {createStore, compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //para ver el redux desde la pc

const reducers = state => state;

export const store = createStore(reducers,{}, composeEnhancers());
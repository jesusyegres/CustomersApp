import {createStore, compose} from 'redux';
import reducers from './../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //para ver el redux desde la pc


export const store = createStore(reducers,{}, composeEnhancers());
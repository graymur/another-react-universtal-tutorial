import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import reducer from './rootReducer.js';
import dataMiddleware from './dataMiddleware.js';

export default function configureStore(initialState) {
    const middleware = [
        routerMiddleware(browserHistory),
        dataMiddleware
    ];

    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(reducer, initialState);
}



import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from '../shared/Root.jsx';
import api from './api.js';
import configureStore from '../shared/redux/configureStore.js';

let initialState = {};
if (window.__INITIAL_STATE__ !== 'undefined') {
    initialState = window.__INITIAL_STATE__;
}

const store = configureStore(initialState, api);

render((
    <Provider store={store}>
        <Root/>
    </Provider>
), document.getElementById('root'));
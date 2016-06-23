import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore.js';

import routes from './routes.jsx';

let initialState = {};
if (typeof window !== 'undefined' && typeof window.__INITIAL_STATE__ !== 'undefined') {
    initialState = window.__INITIAL_STATE__;
}

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

export default function Root() {
    return (
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    );
};
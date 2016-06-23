import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore.js';

import Blog from './modules/blog/container.jsx';
import Galleries from './modules/galleries/container.jsx';
import Page from './modules/page/container.jsx';
import Index from './modules/index/container.jsx';

import state from './data.json';

const store = configureStore(state);
const history = syncHistoryWithStore(browserHistory, store);

export default function Root() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/blog" component={Blog}/>
                <Route path="/galleries" component={Galleries}/>
                <Route path="/" component={Index}/>
                <Route path="*" component={Page}/>
            </Router>
        </Provider>
    );
};


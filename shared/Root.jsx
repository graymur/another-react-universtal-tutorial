import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore.js';

import App from './modules/app/container.jsx';
import Blog from './modules/blog/container.jsx';
import Galleries from './modules/galleries/container.jsx';
import Page from './modules/page/container.jsx';
import Index from './modules/index/container.jsx';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default function Root() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route component={App}>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/galleries" component={Galleries}/>
                    <Route path="/" component={Index}/>
                    <Route path="*" component={Page}/>
                </Route>
            </Router>
        </Provider>
    );
};


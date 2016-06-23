import React from 'react';

import { Route, Redirect } from 'react-router';

import App from './modules/app/container.jsx';
import Blog from './modules/blog/container.jsx';
import Galleries from './modules/galleries/container.jsx';
import Page from './modules/page/container.jsx';
import Index from './modules/index/container.jsx';

export default (
    <Route component={App}>
        <Route path="/blog" component={Blog}/>
        <Route path="/galleries" component={Galleries}/>
        <Route path="/" component={Index}/>
        <Route path="*" component={Page}/>
    </Route>
);
import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from './routes.jsx';

export default function Root() {
    return (
        <Router history={browserHistory}>{routes}</Router>
    );
};
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from '../modules/app/reducer.js';
import blog from '../modules/blog/reducer.js';
import galleries from '../modules/galleries/reducer.js';
import index from '../modules/index/reducer.js';
import page from '../modules/page/reducer.js';

const reducer = combineReducers({
    app,
    blog,
    galleries,
    index,
    page,
    routing: routerReducer
});

export default reducer;
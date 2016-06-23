/**
 * Hello, my curious reader! Glad you've discovered this file. Here I want to make our server server-side
 * code a bit more synchronous with the magic of generators!
 */

import express from 'express';
import fs from 'fs';
import api from './api.js';
import routes from '../shared/routes.jsx';
import React from 'react';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import configureStore from '../shared/redux/configureStore.js';

const port = 3000;
const layout = fs.readFileSync(__dirname + '/layout.html', 'utf8');

let app = express();

app.all('/api/:endpoint', (req, res) => {
    setTimeout(() => {
        api(req.params.endpoint, req.query).then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result));
        }).catch(e => {
            res.status(404).send(String(e));
        });
    }, Math.random() * (2000 - 500) + 500);
});

app.use('/js', express.static(__dirname + '/../public/js'));

/**
 * Remember how in a previous file we had to add a special middleware to create "app" state,
 * because our app() function returns a promise? Here we will see how we can avoid it.
 */

app.get('*', (req, res) => {

    /**
     * This is our generator function. It treats asynchronous operations that return promises
     * as synchronous. How does it do it?
     */
    function* serve() {
        try {
            let state = {};

            /**
             * api('app') call returns a promise, but 'yield' keyword allows us not bother
             * with all the THENs and CATCHs. Wanna know how this magic works? See
             * runGenerator() function below.
             */
            state.app = yield api('app');

            let store = configureStore(state, api);

            /**
             * Here we have a little hiccup. React-routes's match() function doesn't return
             * a promise, but accepts a callback. We can't use 'yield' inside a callback,
             * so we will promisify match() call.
             */
            var matchPromise = new Promise((resolve, reject) => {
                match({routes, location: req.originalUrl}, (err, redirect, renderProps) => {

                    let { params } = renderProps;
                    params.dispatch = store.dispatch;

                    let component = renderProps.components[1].WrappedComponent;

                    (component.fetch ? component.fetch(params) : Promise.resolve()).then(data => {
                        resolve(renderProps);
                    });
                });
            });

            /**
             * And here we reap our wittiness
             */
            let renderProps = yield matchPromise;

            /**
             * Now we just render everything synchronously
             */
            let content = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );

            let response = layout.replace('{{content}}', content);
            response = response.replace('{{state}}', JSON.stringify(store.getState()));

            res.setHeader('Content-Type', 'text/html');
            res.send(response);
        } catch (e) {
            res.status(404).setHeader('Content-Type', 'text/html');
            res.send(String(e));
        }
    }

    /**
     * Here we actually fire our generator.
     */
    runGenerator(serve());
});

/**
 * This function accepts a generator object, which is returned by generator function, and start
 * calling next() function on it until generator is finished. The only trick is that if
 * generator returns a promise, we don't fire next() right away, but wait for the promise
 * to resolve and then call next() with the result of a promise!
 * This is basically what https://github.com/tj/co does.
 */
function runGenerator(g) {
    (function step(g, arg) {
        var res = g.next(arg);

        if (res.done) return res.value;

        if (typeof res.value.then === 'function') {
            res.value
                .then(res => step(g, res))
                .catch(err => g.throw(err));
        } else {
            step(g, res);
        }
    })(g);
}

app.listen(port, () => {
    console.log(`App listening at port ${port}!`);
});
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

app.use((req, res, next) => {
    api('app').then(app => {
        req.state = { app };
        return next();
    }).catch(e => next(e));
});

app.get('*', (req, res) => {
    match({ routes, location: req.originalUrl }, (err, redirect, renderProps) => {

        let store = configureStore(req.state, api);
        let { params } = renderProps;
        params.dispatch = store.dispatch;

        let component = renderProps.components[1].WrappedComponent;

        (component.fetch ? component.fetch(params) : Promise.resolve()).then(data => {
            let content = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );

            let response = layout.replace('{{content}}', content);
            response = response.replace('{{state}}', JSON.stringify(store.getState()));

            res.setHeader('Content-Type', 'text/html');
            res.send(response);
        }).catch(err => {
            console.log(err);
        });
    });
});

app.listen(port, () => {
    console.log(`App listening at port ${port}!`);
});


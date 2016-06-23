var webpack = require('webpack');

var plugins = [];

module.exports = {
    entry: {
        'main': './client/main.jsx'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },
        { test: /\.json/, loader: "json" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['client', 'server', 'shared', 'node_modules']
    },
    output: {
        path: __dirname + '/public/js',
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: plugins
};
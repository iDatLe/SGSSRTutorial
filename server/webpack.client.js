const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const config = {
    // Tell webpack the root file of our server application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file that is generated
    // In client, it's public because that's where the public is going to access it
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);
const path = require('path');

module.exports = {
    // Tell webpack the root file of our server application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file that is generated
    // In client, it's public because that's where the public is going to access it
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // Tell babel to run on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}],
                    ]
                }
            }
        ]
    }
};
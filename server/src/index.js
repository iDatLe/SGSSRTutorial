//THIS FILE IS THE EXPRESS LOGIC

import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

 // Tells express to treat the public directory as a static
app.use(express.static('public'));
app.get('*', (req, res) => { // The 'req' contains the url the user is trying to access
    const store = createStore();

    // Some logic to initialize and load data into store

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening in on port 3000');
});

// NOTE. IF ANY CHANGES ARE MADE, REBUILD THE SERVER BUNDLE.JS
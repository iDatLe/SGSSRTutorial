//THIS FILE IS THE EXPRESS LOGIC

import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(
        '/api', 
        proxy('http://react-ssr-api.herokuapp.com', { // This part is strictly for user with THIS application. Not your own personal application
        proxyReqOptDecorator(opts){
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        }
    })
);
 // Tells express to treat the public directory as a static
app.use(express.static('public'));
app.get('*', (req, res) => { // The 'req' contains the url the user is trying to access
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    // Passes in the array of promises above
    Promise.all(promises).then(() => {
        // When we get here, all of our data loading requests must be completed
        res.send(renderer(req, store));
    });
});

app.listen(3000, () => {
    console.log('Listening in on port 3000');
});

// NOTE. IF ANY CHANGES ARE MADE, REBUILD THE SERVER BUNDLE.JS
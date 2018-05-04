// THIS FILE IS THE SSR AND REACT LOGIC

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

 // The user is going to see the 'content' and the script tag tells the browser 
 // it will have to go back to download the bundle.js
 // Express will automatically look into the public folder so you don't have to do 
 // 'src="public/bundle.js"'
};
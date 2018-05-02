// THIS FILE IS THE SSR AND REACT LOGIC

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
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
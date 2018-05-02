import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/home';

const app = express();

 // Tells express to treat the public directory as a static
app.use(express.static('public'));
app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    const html = `
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
 
    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening in on port 3000');
});

// NOTE. IF ANY CHANGES ARE MADE, REBUILD THE SERVER BUNDLE.JS
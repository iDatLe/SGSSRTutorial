// Start up point for the client side of the application

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
    applyMiddleware(thunk)
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
); // The second argument is where we want to render our Home app into
// renderRoutes is used so that matchRoutes outside of render and inside results in the same branch
// Start up point for the client side of the application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root')); // The second argument is where we want to render our Home app into
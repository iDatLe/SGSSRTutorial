// File shared by browser and server

import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
    {
        ...App, // So now App is the root component and will always be rendered on every route/ page.
                // The routes are nested under the App component.
        routes: [ 
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins',
            },
            {
                ...UsersListPage,
                path: '/users',
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

// This file no longer is exporting a react component. It's exporting an array of objects.
// The spread syntax is used to spread the component's properties onto the routes.
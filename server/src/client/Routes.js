// File shared by browser and server

import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users',
    }
];

//This file no longer is exporting a react component. It's exporting an array of objects.
// File shared by browser and server

import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList
    }
];

//This file no longer is exporting a react component. It's exporting an array of objects.
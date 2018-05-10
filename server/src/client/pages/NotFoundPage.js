import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => { // the '= {}' part is because the client won't pick up 'staticContext' alone so we have to create an empty object
staticContext.notFound = true;
return <h1>Oops, route not found.</h1>
}

export default {
    component: NotFoundPage
};
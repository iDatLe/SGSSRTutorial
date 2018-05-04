import React from 'react';

const Home = () => {
    return(
        <div>
            <div>I am the only home component. Dat Le.</div>
            <button onClick={() => console.log('Hi there!')}>Press me!</button>
        </div>
    );
};

export default Home;
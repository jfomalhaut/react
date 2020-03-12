import React from 'react';

const Detail2 = ({ match }) => {
    return (
        <h1>{match.params.name}</h1>
    );
};

export default Detail2;
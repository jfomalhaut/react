import React from 'react';

const Detail = ({ match }) => {
    return (
        <div>{match.params.id}</div>
    );
};

export default Detail;
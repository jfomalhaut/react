import React from 'react';
import imageURI from '../globals/imageURI';

const Detail2 = ({ match }) => {
    return (
        <div>
            <div>{match.params.src}</div>

            <img src={`${imageURI[match.params.src]}`} />
        </div>
    );
};

export default Detail2;
import React from 'react';
import imageURI from '../globals/imageURI';

const Detail2 = ({ match }) => {

    // const {
    //     params: {
    //         src
    //     }
    // } = match;

    return (
        // <h1>{match.params.name}</h1>
        // <h1>{match.params.src}</h1>
        <img src={`${imageURI[match.params.src]}`} />
    );
};

export default Detail2;

// match = {
//     params: {
//         src: 'meat'
//     }
// }
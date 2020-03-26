import React from 'react';

const Setting = ({ match : { params : { data } } } ) => {
    return (
        <h1>Setting Component, {data} </h1>
    );
};

export default Setting;
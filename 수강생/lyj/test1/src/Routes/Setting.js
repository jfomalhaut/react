import React from 'react';

const Setting = ({ match: { params: { data } } }) => {
    return (
        <div>
            <h1>SETTING COMPONENT</h1>
            <h1>DATA : {data}</h1>
        </div>
    );
};

export default Setting;
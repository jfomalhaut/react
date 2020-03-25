import React from 'react';

const Setting = ({ match: { params: { data } } }) => {
    return (
        <div>
            <h1>SETTING COMPONENT</h1>
            <h1>setting : {data}</h1>
        </div>
    );
};

export default Setting;
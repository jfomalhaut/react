import React from 'react';

const Setting = ({ match: { params: { data } } } ) => {
    return (
        <div>
            Setting Component, {data}
        </div>
    );
};

export default Setting;
import React from 'react';

const Setting = ({ match: { params: { data} } } ) => {
    return (
        <div>
            Setting, {data}
        </div>
    );
};

export default Setting;
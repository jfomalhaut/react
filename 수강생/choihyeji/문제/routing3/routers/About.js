import React from 'react';

const About = ( { match: { params: { data } } }) => {

    return (
        <div>
            About Component, {data}
        </div>
    );
};

export default About;
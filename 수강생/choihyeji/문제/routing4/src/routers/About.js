import React from 'react';

const About = ({ match: { params : { data } } } ) => {
    return (
        <div>
            About, {data}
        </div>
    );
};

export default About;
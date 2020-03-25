import React from 'react'


const About = ({match:{params : {data }}}) =>{
    // match:{
    //     params : 
    //         src
    // }
    return(
        <div className="Data">
        <h1>{data}</h1>
        </div>

    );
};

export default About;
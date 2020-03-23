import React, { useState } from 'react'


const Home = () =>{
    const [hData, setHData] = useState('');

    const onHData = event => {
        const {target : {value}} = event;
        setHData(value);
    };

    return(
        <div className="data">
            <input value={hData} onChange={onHData} sendInput={onHData}/>
        </div>
    );
};

export default Home;
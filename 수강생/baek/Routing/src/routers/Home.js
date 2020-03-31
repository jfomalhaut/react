import React, { useState } from 'react'


const Home = ({history}) => {
    const [data, setData] = useState('');

    const onData = event =>{
        const {target : {value} } = event;
        setData(value);
    };

    const navigateAbout =() => {
        history.push(`/about/${data}`)
    };

    const navigateSetting = () => {
        history.push(`/setting/${data}`)
    }
    

    return(
        <div className="Data">
            <h1>Home</h1>
            <input value={data} onChange={onData}/>
            <button onClick={navigateAbout}><h3>about으로</h3></button>
            <button onClick={navigateSetting}><h3>Setting으로</h3></button>
        </div>

    );
};

export default Home;
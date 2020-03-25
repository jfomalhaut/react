import React, { useState } from 'react'


const Home = ({history}) =>{
    const [data, setData] = useState('');

    const onData = event => {
        const {target : {value}} = event;
        setData(value);
    };
    const navigateAbout = () => {
        // history.push('/about/'+data)
        history.push(`/about/${data}`);
    };
    const navigateSetting = () => {
        history.push(`/setting/${data}`);
    };

    return(
        <div className="Data">
            <h1>home</h1>
            <input value={data} onChange={onData} />
            <button onClick={navigateAbout}>
                <h5>about으로</h5>
            </button>
            <button onClick={navigateSetting}>
                <h5>setting으로</h5>
            </button>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import FISHES from '../jsons/fishes.json';
import { FaRegCheckSquare } from 'react-icons/fa';
import './List.css';

const List = () => {
    console.log(FISHES)
    const [view, setView] = useState([ FISHES ]);

    useEffect(() => {
        setView(FISHES);
    }, []);


    return (
        <div className="container">
            <div className="head">Fish List</div>
            <div className="list">
                {view.map(fishes => (
                    <div className="card">
                        <img className="image" src={fishes.src}></img>
                            <FaRegCheckSquare className="checkbox" size={25}/>
                        <div className="info">
                            <div className="name">{fishes.name}</div>
                            <div className="price">{fishes.price}원</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default List;
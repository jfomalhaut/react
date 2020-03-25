import React, { useState, useEffect } from 'react';
import ITEM from '../json/fishes.json';
import { AiOutlineCheck } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Detail from '../component/Detail';
import './List.css';

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(ITEM);
    }, [ITEM]);

    return (
        <div className="container">
            {list.map((item, index) => (
                <Detail key={`Detail${item.id}`} item={item}/>
            ))}
                  
        </div>
    );
};
export default List;
import React, { useEffect, useState } from 'react';
import Fishes from '../jsons/fishes.json'
import Items from '../components/Items';




const List = () => {
    const [items, setItem] = useState([]);
    
    useEffect(()=>{
        setItem(Fishes);
    }, [items])
    

    return(
        <div className="container">
            {Fishes.map(item=>(
                <Items item={item}/>
            ))}
        </div>
        
    );
};

export default List;
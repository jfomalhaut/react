import React, {useState, useEffect} from 'react';
import ITEMS from '../json/items.json';
import CATEGORY from '../json/category.json';
import './List.css';
import Item from '../component/Item';


const List = () => {
    const [view, setView] = useState([]);
    const [onType, setOnType] = useState(0);
    const [isLoading, setLoading] =useState(true);

    const sortItem = (_id) => {
        setOnType(_id);
        setLoading(true);
        if(_id === 0){
            setView(ITEMS);
        }else{
            const sort = ITEMS.filter(item => {
                return item.type === _id;
            });
            setView(sort);
        };
    };

    const offsLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 400);
    };

    //로딩이 꺼지게 하는것
    useEffect(() => {
        offsLoading();
    }, [onType]);
    
    useEffect(() => {
        //처음 실행할떄 넣어주는 공간
        setView(ITEMS);
    }, []);

    return (
        <div className="container">
            <ul className="header">
                {CATEGORY.map(item => (
                    <li key={`category${item.id}`} 
                        className={`label ${ onType === item.id ? 'active' : ''}`} 
                        onClick={() => sortItem(item.id)}
                    >
                        {item.label}
                    </li>
                ))};
            </ul>
            {isLoading ? (
                <div className="loading">Loading...</div>
            ):(
                <div className="items">
                    {view.map(item => (
                    <Item key={`ITEM${item.id}`} item={item}/>
                    ))};
                </div>
            )};
            
        </div>
    );
};
export default List;
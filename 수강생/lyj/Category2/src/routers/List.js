import React from 'react';
import './List.css';
import ITEMS from '../jsons/items.json';
import CATEGORY from '../jsons/category.json';
import Item from '../components/item';

const List = () => {
    const [view,setView] = useState([]);
    const [onType, setOnType] = useState(0);
    const [isLoading, setLoading] = useState(true);

    const sortItem = (_id) => {
        setOnType(_id);

        if (_id === 0) {
            setView(ITEMS);
        } else {
            const sort = ITEMS.filter(item => {
                return item.type === _id;
            });
            setView(sort);
        }
    };

    const offLoading = () => {
        sestTimeout(() => {
            setLoading(false);
        }, 400);
    };

    useEffect(() => {
        setLoading(true);
        offLoading();
    }, [onType]);

    useEffect(() => {
        setView(ITEMS);
        offLoading();
    }, []);

    return (
        <div className="container">
            <ul className="header">
                {CATEGORY.map(item => {
                    <li
                        className={`lable${ onType === item.id ? 'active' : '' }`}
                        key={`category${item.id}`}
                        onClick={ () => sortItem(item.id)}
                    >
                        {item.label}
                    </li>
                })}
            </ul>
            {isLoading ? (
                <div className="loading">loading</div>
            ) : (
                <div className="items">
                    {view.map(item => (
                        <Item item={item} key={`item$(item.id)`} />
                    ))}
                </div>
            )}
        </div>
    );

};

export default List;
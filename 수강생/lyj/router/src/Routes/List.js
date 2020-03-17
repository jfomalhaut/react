import React from 'react';
import Item from '../components/item';
import './List.css';

const List = ({history}) => {
    const items = [
        {id: 1, name: 'item1', src: 'meat1'},
        {id: 2, name: 'item2', src: 'meat2'},
        {id: 3, name: 'item3', src: 'meat3'},
        {id: 4, name: 'item4', src: 'meat4'},
        {id: 5, name: 'item5', src: 'meat5'},
        {id: 6, name: 'item6', src: 'meat6'},
        {id: 7, name: 'item7', src: 'meat7'},
        {id: 8, name: 'item8', src: 'meat8'}
    ];
    
    const goDetail = id => {
        history.push(`/detail/${id}`);  
        // window.location.href="index.html"; 같은 기능
        // console.log(id);
    };

    // const goDetail2 = name => {
    //     history.push(`/detail2/${name}`);
    // };
    const goDetail2 = src => {
        history.push(`/detail2/${src}`);
    };
    
    //props : 다른컨퍼넌트에 있는 이름을 name={}으로 불러오기
    return (
        <div className="container">
            {items.map((item, index) =>(
                <Item key={`ITEM${item.id}`} item={item} onClickHandler={goDetail} onClickHandler2={goDetail2}/>
            ))}
        </div>
    );
    // return (
    //     <div className="container">
    //         {items.map((item, index) =>(
    //             <Item key={`ITEM${item.id}`} id={item.id} name={item.name} onClickHandler={goDetail}/>
    //         ))}
    //     </div>
    // );
};

export default List;
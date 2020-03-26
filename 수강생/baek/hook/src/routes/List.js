import React from 'react';
import './List.css';

const List = () => {
    return (
        <div className="container">
            <h1>선택된 항목 수 : <span className="count">123</span></h1>
            <h1>선택된 상품의 총액 : <span className="count">20,000원</span></h1>
            <div className="options">
                <button>전체선택</button>
                <button>선택삭제</button>
                <button>전체삭제</button>
                <button>상품추가</button>
            </div>
            <div className="list">

            </div>
        </div>
    )
};

export default List;
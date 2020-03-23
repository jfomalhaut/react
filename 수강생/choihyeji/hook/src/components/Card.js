import React from 'react';

const Card = ({ match }) => {
    const [phoneBook, setPhoneBook] = useState([]);

    const onDelete = _index => {
        const afterPhoneBook = phoneBook.filter((item, index) => {
            return index !== _index;
        });

        setPhoneBook(afterPhoneBook);
    };

    return (
        <div key={`CARD${index}`} className="card">
            <div className="info">
                <div className="name">이름: {item.name}</div>
                <div className="age">연령: {item.age}세</div>
                <div className="number">번호:{item.number}</div>
            </div>
            <div className="delete">
                <button onClick={() => onDelete(index)}>삭제</button>
            </div>
        </div>
    );
};

export default Card;
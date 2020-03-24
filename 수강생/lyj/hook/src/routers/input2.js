import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import Card2 from '../components/card2';

const Input2 = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState(''); //문자열이들어가야하므로 ''
    const [phoneBook, setPhoneBook] = useState([]); //배열이들어가야하므로 []

    const onChangeDate = event => {
        const { target: { value } } = event;
        setName(value);
    };
    const onChangeAge = event => {
        const { target: { value } } = event;
        setAge(value);
    };
    const onChangeDate3 = event => {
        const { target: { value } } = event;
        setNumber(value);
    };
    
    //함수이름 같으면 안된다 (const 뒤에 쓰이는 이름)
    const onInsert = () => {
        const data = {
            name: name,
            age: age,
            number: number
        }; //이름, 나이, 번호라는 값, 키:값(키와 값이 같을 경우 name이라고 하나만 써도됨)
        const pb = phoneBook.concat(data).reverse(); //concat으로 이름, 나이, 번호를 추가
        setPhoneBook(pb); //phoneBook에 이름, 나이, 번호로 값을 변경
        setName('');
        setAge('');
        setNumber(''); //입력이끝나면 빈칸으로 활성화하기
    };

    const onDelete = _index => {
        const afterPhoneBook = phoneBook.filter((item, index) => {
            return index !== _index; //onDelete버튼의 index를 받아서 같은 index를 filter를 이용해서 걸러낸다 같지않은것은 리턴해라(다시보여줘라)
        }).reverse(); //reverse..해주면 새로운데이터가 위로

        setPhoneBook(afterPhoneBook);
    };

    useEffect ( () => {
        console.log(phoneBook);
    }, [phoneBook]); //phoneBook이라는 값을 실시간으로 체크한다

    
    return (
        <div className="container">
            <div className="Inputform">
                <div className="left">
                    <div>
                        <input value={name} onChange={onChangeDate} placeholder="이름" />
                    </div>
                    <div>
                        <input value={age} onChange={onChangeAge} placeholder="연령" />
                    </div>
                    <div>
                        <input value={number} onChange={onChangeDate3} placeholder="전화번호" />
                    </div>
                </div>
                <div className="right">
                    <button onClick={onInsert}>입력</button>
                </div>
            </div>
            <div className="list">
                {phoneBook.map((item, index) => (
                    <>
                        <Card2 onDeleteA={onDelete} index={index} goods={item} key={`CARD$(index)`}/>
                        {/* <div className="card" key={`CARD${index}`}>
                            <div className="info">
                                <div className="name">이름: {item.name}</div>
                                <div className="age">연령: {item.age}</div>
                                <div className="number">전화번호: {item.number}</div>
                            </div>
                            <div className="delete">
                                <button onClick={() => onDelete(index)}>삭제</button>
                            </div>
                        </div> */}
                    </>
                ))}
            </div>
        </div>
    );
};


export default Input2;
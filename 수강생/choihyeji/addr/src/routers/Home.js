import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Home.css';

const ADDR_API = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
const CONFIRM_KEY = process.env.CONFIRM_KEY;
const VIEW = 10;

const Home = () => {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [addr, setAddr] = useState('');

    const getAddress = () => {
        if( addr === '') return;
        Axios.get(`${ADDR_API}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${addr}`).then(res => {
            const { data: { results : { common: { totalCount }, juso } } } = res;
            console.log(juso);
            setList(juso);
            setTotal(totalCount);
            setAddr('');
        });
    };

    const prev = () => {
        if(currentPage === 1){
            return;
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    const next = () => {
        setCurrentPage(currentPage + 1);
    };

    const onChangeAddr = event => {
        const { target: { value } } = event;
        setAddr(value);
    };
    

    useEffect(() => {
        getAddress();
    },[currentPage]);
    
    // useEffect(() => {
    //     getAddress();
    // },[]);

    return (
        <div className="container">
            <h1>검색된 주소는 총 {total}개 입니다</h1>
            <div className="inputField">
                <input value={addr} onChange={onChangeAddr} />
                <button onClick={getAddress}>검색</button>
            </div>
            <div className="btns">
                <button className="btn" onClick={prev}>이전</button>
                <button className="btn" onClick={next}>다음</button>
            </div>
            <div className="list">
                {list.map((item, index) => (
                    <div className="addr" key={`ADDRESS${index}`}>
                        <div className="zipNo">{item.zipNo}</div>
                        <div className="roadAddrPart1">{item.roadAddrPart1}</div>
                        <div className="jibunAddr">{item.jibunAddr}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

// 주소 API 사용하기
// 1. Confirm Key를 받는다 (7일간, 개발자용)
// 2. 어떤 parameter를 넘기는지 체크한다
// 3. API 주소를 받아서
// 4. axios를 통해 데이터를 받는다
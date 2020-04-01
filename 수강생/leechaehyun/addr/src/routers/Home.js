import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const ADDR_API = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
const CONFIRM_KEY = process.env.CONFIRM_KEY;
const VIEW = 10;

const Home = () => {
    const [list, setList] = useState([]);
    const [total, settatal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); 
    const [addr, setaddr] = useState('');
    

    const getAddress = () => {
        if(addr === '')return;
        Axios.get(`${ADDR_API}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${addr}`).then(res => {
            const { data: { results : { common: { totalCount }, juso } } } = res;
            // console.log(juso);
            setList(juso);
            settatal(totalCount);
            setaddr('');
        });
    };

    const onChangeaddr = ev => {
        const { target: { value } } = ev;
        setaddr(value);
    }

    const prev = () => {
        if (currentPage === 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
    };

    const next = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        getAddress()
    }, [currentPage]);

    useEffect(() => {
        getAddress()
    }, []);


    return (
        <div className="container">
            <h1>검색된 주소는 총 {total}개입니다</h1>
            <div className="inputField">
                <input value={addr} onChange={onChangeaddr}/>
                <button className="btn2" onClick={getAddress}>검색</button>
            </div>
            <div className="list">
                {list.map(item => (
                    <div className="addr">
                        <div className="zipNo">{item.zipNo}</div>
                        <div className="addrs">
                            <div className="roadAddrPart1">{item.roadAddrPart1}</div>
                            <div className="jibunAddr">{item.jibunAddr}</div>
                        </div>
                    </div>    
                ))}
            </div>
            <div className="btns">
                <button className="btn" onClick={prev}>
                    <h1>이전</h1>
                </button>
                <h1>현재 페이지: {currentPage}</h1>
                <button className="btn" onClick={next}>
                    <h1>다음</h1>
                </button>
            </div> 
        </div>
    );
};

export default Home;

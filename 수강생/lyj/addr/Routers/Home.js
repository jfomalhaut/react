import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const ADDR_API = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
const CONFIRM_KEY = process.env.CONFIRM_KEY; //위에 긴 키값을 CONFIRM_KEY로 줄임
const VIEW = 10;

const Home = () => {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');

    const getAddress = () => {
        if(searchInput === '') return; //searchInput는 빈것(위에) setCurrentPage는 1(위에) 이므로 비었을때, 리턴하도록, 둘중 어느위치 가능
        Axios.get(`${ADDR_API}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${searchInput}`).then(res => {
            //post방식도있다아.....
            // console.log(res);
            const { data: { results : { common: { totalCount }, juso } } } = res;
            console.log(juso);
            setList(juso);
            setTotal(totalCount);
            setSearchInput(''); //검색창 비워두기
        })
    };

    const goSearch = ev => {
        const { target : { value } } = ev;
        setSearchInput(value);
    }; //input창 폼사용, 항상 사용



    const prev = () => {
        if (currentPage === 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
    };

    const next = () => {
        setCurrentPage(currentPage + 1);
    };


    useEffect (() => {
        // if(searchInput === '') return; //searchInput는 빈것(위에) setCurrentPage는 1(위에) 이므로 비었을때, 리턴하도록, 둘중 어느위치 가능
        getAddress();
    }, [currentPage]) //커렌트페이지가 변경되는걸 감시하다가 변경되면 겟어드레스가 실행

    // useEffect(() => {
    //     getAddress();
    // }, [])

    return (
        <div className="container">
            <h1>검색된 주소는 총 {total}개입니다.</h1>
            <div className="find">
                <input value={searchInput} onChange={goSearch} />
                <button className="addrBtn" onClick={getAddress}>검색</button>
            </div>
                <div className="list">
                    {list.map((item, index) => (
                        <div className="juso" key={`juso${index}`}>
                            <div className="num">{item.zipNo}</div>
                            <div className="addr">
                                <div className="doro">{item.roadAddrPart1}</div>
                                <div className="jibun">{item.jibunAddr}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btns">
                    <h1>현재 페이지 : {currentPage}</h1>
                    <button className="btn" onClick={prev}>이전</button>
                    <button className="btn" onClick={next}>다음</button>
                </div>
        </div>
    );
};

export default Home;
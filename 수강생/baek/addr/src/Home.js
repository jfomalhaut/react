import React, { useEffect, useState } from 'react'
import Axios from 'axios';
const ADDR_API = "http://www.juso.go.kr/addrlink/addrLinkApi.do	"
const CONFIRM_KEY = process.env.CONFIRM_KEY;
const VIEW = 10;

const Home = () =>{
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const getAddress =() =>{
        Axios.get(`${ADDR_API}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=역삼동`).then(res =>{
            const {data : {results : { common: {totalCount}, juso, zipNo }}}= res;
            setList(juso);
            setTotal(totalCount);
        })        

    };

    const next = _index => {
        setCurrentPage(currentPage + 1);
    };

    const prev = () => {
        if(currentPage === 1){
            return
        }
        setCurrentPage(currentPage - 1);
    }

    useEffect(()=>{
        getAddress();
    },[currentPage])

    useEffect(()=> {
        getAddress();
    },[])

    return (
            <div className="container">
            <h1>검색된 주소는 총 {total}개입니다</h1>
                <div className="list">
                    {list.map((item, index) => (
                        <div className="addr">
                            <div className="addr_left">
                                <div className="zip">{item.zipNo}(zipNO)</div>
                            </div>
                            <div className="addr_right">
                                <div className="road_addr">도로명 : {item.roadAddrPart1}</div>
                                <div className="jibun_addr">지번 :{item.jibunAddr}</div>
                            </div>
                        </div>
                    ))}
                    <div className="btn">
                        <button onClick={()=>{next()}}>다음</button>
                        <h1>{currentPage}현재페이지</h1>
                        <button onClick={()=>{prev()}}>이전</button>
                    </div>
                </div>
            </div>
    );
};

export default Home;
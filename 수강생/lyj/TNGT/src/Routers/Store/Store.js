import React from 'react';
import './Store.css';
import { Footer } from '../../component';

const Store = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="store_tit">
                <span>매장찾기</span>
            </div>
            <div className="map">
                <div className="map_search">
                    <div className="top_search">
                        <div className="one_sear">
                            <select className="type">
                                <option>매장형태</option>
                                <option>백화점</option>
                                <option>일반가두매장</option>
                                <option>상설할인매장</option>
                                <option>할인점입점</option>
                                <option>종합가두매장</option>
                            </select>
                            <select className="tngt">
                                <option>TNGT</option>
                            </select>
                        </div>
                        <div className="two_sear">
                            <select className="si">
                                <option>시/도</option>
                                <option>서울</option>
                                <option>충남</option>
                                <option>부산</option>
                                <option>인천</option>
                                <option>울산</option>
                                <option>제주</option>
                                <option>광주</option>
                                <option>대전</option>
                                <option>대구</option>
                                <option>강원</option>
                                <option>경북</option>
                                <option>전북</option>
                                <option>전남</option>
                                <option>경기</option>
                                <option>경남</option>
                                <option>세종</option>
                            </select>
                            <select className="go">
                                <option>구/군</option>
                            </select>
                        </div>
                        <input className="juso" placeholder="매장명 또는 주소를 입력해주세요"></input>
                        <button className="store_search">매장검색</button>
                    </div>
                    <div className="bottom_search">
                        <div className="sear_tit">
                            <span className="name">검색 결과 <strong>(75)</strong> </span>
                        </div>
                        <div className="sear_result">
                            <div className="store_text">
                                <span className="store_name">코엑스TNGT</span>
                                <span className="store_dec">상설할인매장</span>
                            </div>
                            <div className="store_juso">
                                <span className="s_juso">서울 강남구 영동대로 513 코엑스몰 F102</span>
                                <span className="number">02-551-1577</span>
                            </div>
                            <div className="location">
                                <img src="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <Footer />
        </div>
    );
};

export default Store;
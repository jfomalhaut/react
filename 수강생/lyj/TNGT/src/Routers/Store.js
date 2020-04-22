import React from 'react';
import './Store.css';

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
            <footer>
                <div className="footer_up">
                    <div className="f_up_tit">
                        <div className="up_text">이용약관</div>
                        <div className="up_text">개인정보처리방침</div>
                        <div className="up_text">청소년보호정책</div>
                        <div className="up_text">공지사항</div>
                    </div>
                    <div className="f_up_text">
                        <div className="text_one">
                            <span className="one">사업자 등록번호 : 211-87-87724 </span>
                            <span className="two">통신판매업신고 : 제 2010-서울강남-00066호</span>
                            <span>사업자 정보확인 ></span>
                        </div>
                        <div className="text_two">
                            <span className="onee">대표전화 : 1544-5114</span>
                            <span>(유료)팩스 : 031-360-0003</span>
                        </div>
                        <div className="text_three">
                            <span className="oneee">서울 강남구 언주로 870</span>
                            <span>(주)LF 대표이사 오규식</span>
                        </div>
                        <div className="text_four">
                            <span>COPYRIGHT © 1990-2018 TNGT ALL RIGHTS RESERVED</span>
                        </div>
                    </div>
                </div>
                <div className="footer_down">
                    <img src="" />
                    <img src="" />
                    <img src="" />
                    <img src="" />
                    <img src="" />
                    <span>서비스 가입사실 확인 ></span>
                </div>
            </footer>
        </div>
    );
};

export default Store;
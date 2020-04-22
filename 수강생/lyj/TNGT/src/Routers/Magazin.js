import React from 'react';
import './Magazin.css';

const Magazin = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="maga_tit">
                <span>TNGT LOOK</span>
            </div>
            <div className="maga_look">
                <div className="maga_item">
                    <div className="maga_main">
                        <img className="maga_img" src="" />
                        <div className="maga_title">
                            <span className="name">외출 하고 싶어지는 가디건 스타일링</span>
                            <span className="dec">완전한 봄날 외출 준비를 하시는 여러분을 위한 심플한 가디건 스타일링 팁!</span>
                        </div>
                    </div>
                    <div className="maga_sub">
                        <div className="sub_item">
                            <img className="sub_img" src="" />
                            <div className="sub_tit">
                                <span>[BLACK]컬러 배색 가디건</span>
                            </div>
                        </div>
                        <div className="sub_item">
                            <img className="sub_img" src="" />
                            <div className="sub_tit">
                                <span>[BLACK]컬러 배색 가디건</span>
                            </div>
                        </div>
                        <div className="sub_item">
                            <img className="sub_img" src="" />
                            <div className="sub_tit">
                                <span>[BLACK]컬러 배색 가디건</span>
                            </div>
                        </div>
                        <div className="sub_item">
                            <img className="sub_img" src="" />
                            <div className="sub_tit">
                                <span>[BLACK]컬러 배색 가디건</span>
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

export default Magazin;
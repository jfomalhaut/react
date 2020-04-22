import React from 'react';
import './Event.css';

const Event = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="tit">
                <span>PROMOTION</span>
            </div>
            <div className="top_banner">
                <div className="banner_img_l">
                    <img src=""/>
                    <div className="ban_tit_l">
                        <span className="name_l">TNGT 7DAYS 스타일링</span>
                        <span className="dec_l">2020/04/01 ~ 04/10</span>
                    </div>
                </div>
                <div className="banner_img_r">
                    <img src=""/>
                    <div className="ban_tit_r">
                        <span className="name_r">[TNGT] 2020 수트 대전 기획</span>
                        <span className="dec_r">2020/04/01 ~ 04/30</span>
                    </div>
                </div>
            </div>
            <div className="bottom_banner">
                <div className="banner_boxes">
                    <div className="banner_box">
                        <img src="" />
                        <div className="box_tit">
                            <span className="box_name">TNGT 베스트셀러 #1</span>
                            <span className="box_dec">2020/03/31 ~ 05/31</span>
                        </div>
                    </div>
                    <div className="banner_box">
                        <img src="" />
                        <div className="box_tit">
                            <span className="box_name">TNGT 베스트셀러 #1</span>
                            <span className="box_dec">2020/03/31 ~ 05/31</span>
                        </div>
                    </div>
                    <div className="banner_box">
                        <img src="" />
                        <div className="box_tit">
                            <span className="box_name">TNGT 베스트셀러 #1</span>
                            <span className="box_dec">2020/03/31 ~ 05/31</span>
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

export default Event;
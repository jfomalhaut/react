import React from 'react';
import imageURI from './../globals/imageURI';
import './footer.css';

const Footer = () => {
    return (
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
            <img className="f_img1" src={`${imageURI['footer1']}`}/>
            <img className="f_img2" src={`${imageURI['footer2']}`}/>
            <img className="f_img3" src={`${imageURI['footer3']}`}/>
            <img className="f_img4" src={`${imageURI['footer4']}`}/>
            <span>서비스 가입사실 확인 ></span>
        </div>
    </footer>
    );
};

export default Footer;
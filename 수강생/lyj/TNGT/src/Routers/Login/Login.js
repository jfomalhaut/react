import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="login_wrap">
                <div className="login_tit">
                    <div className="tit_name">회원 로그인</div>
                </div>
                <div className="login_form_wrap">
                    <input className="id" placeholder="아이디" />
                    <input className="pw" placeholder="비밀번호" />
                    <div className="check_box">
                        <checkbox className="check"/>
                        <span className="check_name" >아이디 저장</span>
                    </div>
                    <button className="btn_login">로그인</button>
                </div>
                <div className="info_wrap">
                    <div className="info_one">
                        <span className="text_one">아직도 회원이 아니신가요?</span>
                        <span className="btn_one">회원가입 ></span>
                    </div>
                    <div className="info_two">
                        <span className="text_two">아이디/비밀번호를 잊으셨나요?</span>
                        <span className="btn_two">아이디/비밀번호 찾기 ></span>
                    </div>
                    <div className="info_three">
                        <span>TNGT는 LF몰 계정(아이디, 비밀번호)으로 사용할 수 있습니다.</span>
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

export default Login;
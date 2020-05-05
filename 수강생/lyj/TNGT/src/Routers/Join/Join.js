import React from 'react';
import './Join.css';

const Join = () => {
    return (
        <div className="container">
            <div className="join">
                <button className="btn_join">회원가입</button>
                <div className="join_info">
                    <div className="thanks">
                        <div className="icon_img thanksI" />
                        <div className="thanks_tit">
                            <span className="t_name">신규가입 감사 쿠폰</span>
                            <span className="t_dec">회원가입 시 할인헤택 쿠폰 발근</span>
                        </div>
                    </div>
                    <div className="birth">
                    <div className="icon_img birthI" />
                        <div className="birth_tit">
                            <span className="b_neme">생일 축하 쿠폰</span>
                            <span className="b_dec">생일(양/음력) 7일전 10% 할인쿠폰 발급</span>
                        </div>
                    </div>
                    <div className="grade">
                        <div className="icon_img gradeI" />
                        <div className="grade_tit">
                            <span className="g_neme">회원 등급별 혜택</span>
                            <span className="g_dec">매월 1일 최대 10% 할인쿠폰 발급</span>
                        </div>
                    </div>
                    <div className="mileage">
                    <div className="icon_img mileageI" />
                        <div className="mileage_tit">
                            <span className="m_neme">마일리지 혜택</span>
                            <span className="m_dec">상품 구매 시 최대 2.5% 적립상품평 작성 시 최대 900mile/점 적립</span>
                        </div>
                    </div>
                    <div className="notice">
                        <div className="n_one">
                            <span>●TNGT는는 LF몰 계정(아이디, 비밀번호)으로 사용할 수 있습니다. LF몰 회원인 경우 별도의 가입 없이 바로 접속하세요.</span>
                        </div>
                        <div className="n_two">
                            <span>●TNGT는는 ㈜LF에서 운영하는 브랜드 사이트이며, 회원가입 시 LF몰 온라인 회원가입 절차로 진행됩니다.</span>
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

export default Join;
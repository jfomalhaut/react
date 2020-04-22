import React from 'react';
import './Shop.css';
import shopItems from '../component/shopItem';

const Shop = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="tit">
                <span>BEST</span>
            </div>
            <div className="category">
                <div className="cate_left">
                    <span>ALL</span>
                    <span>OUTER</span>
                    <span>TOP</span>
                    <span>BOTTOM</span>
                    <span>ACC</span>
                    <span>SUIT</span>
                </div>
                <div className="cate_right">
                    <div className="cate_r_tit">
                        <span>최근 1일</span>
                    </div>
                    <ul className="cate_r_nav">
                        <li>최근 1일</li>
                        <li>최근 1주일</li>
                        <li>최근 1달</li>
                    </ul>
                </div>
            </div>
            <div className="shop_all">
                <div className="all_top">
                    {/* {shopItems.map((item, index) => (
                        <shopItem index={index} items={item} key={`sItems$(index)`} />
                    ))} */}
                    <div className="shop_item">
                        <span className="itme_num">1{}</span>
                        <div className="item_img">
                            <img src="http://img.lfmall.co.kr/file/product/prd/TG/2020/640/TGSH0B215N2_00.jpg" />
                        </div>
                        <div className="item_text">
                            <div className="item_tit">
                                <span>[BLACK] 천연 양가죽 라이더자켓{}</span>
                            </div>
                            <div className="item_price">
                                <div className="item_sale">227,400{}</div>
                                <div className="item_pri">299,000{}</div>
                                <div className="sale">24%{}</div>
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

export default Shop;
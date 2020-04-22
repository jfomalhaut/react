import React from 'react';
import './Home.css';
import { BestItems, Footer } from '../component';
// import BestItems from './../component/bestItems';
import imageURI from './../globals/imageURI';

const BEST_ITEMS = [
    {id: 1, name:'dd', price: 1000, price2: 880, sale: '24%', src: `${imageURI['ex']}`},
    {id: 2, name:'dd', price: 1000, price2: 880, sale: '24%', src: `${imageURI['ex']}`},
    {id: 3, name:'dd', price: 1000, price2: 880, sale: '24%', src: `${imageURI['ex']}`},
    {id: 4, name:'dd', price: 1000, price2: 880, sale: '24%', src: `${imageURI['ex']}`},
    // {id: 5, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'item.jpg'},
    // {id: 6, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'item.jpg'},
    // {id: 7, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'item.jpg'}
];

const Home = () => {
    return (
        <div className="container">
            <button className="btn_up">
                <img src={`${imageURI['topBtn']}`} />
            </button>
            <div className="banner">
                <img src={`${imageURI['banner1']}`}/>
            </div>
            <div className="recommend">
                <div className="recomm_tit">
                    <span>RECOMMEND ITEM</span>
                </div>
                <div className="recomm_img">
                    <img src={`${imageURI['recommend1']}`}/>
                </div>
            </div>
            <div className="promotion">
                <img src={`${imageURI['recommend2']}`}/>
            </div>
            <div className="best_seller">
                <div className="best_tit">
                    <span>BEST SELLER</span>
                </div>
                <div className="best_arr_left">
                    <img src={`${imageURI['arr']}`} />
                </div>
                <div className="best_item">
                    {BEST_ITEMS.map((item, index) => (
                        <BestItems index={index} items={item} key={`BESTITEM(index)`} />
                    ))}
                </div>
                <div className="best_arr_right">
                    <img src={`${imageURI['arr']}`} />
                </div>
                <div className="best_sell_nav">
                    <div className="b_s_nav_box">
                        <div className="nav_box" />
                        <div className="nav_box" />
                        <div className="nav_box" />
                        <div className="nav_box" />
                    </div>
                </div>
            </div>
            <div className="collabo">
                <img src={`${imageURI['dingo']}`}/>
            </div>
            <div className="magazin">
                <div className="magazin_tit">
                    <span>MAGAZIN</span>
                </div>
                <div className="magazin_wrap">
                    <div className="m_wrap_up">
                        <img src={`${imageURI['magazin1']}`}/>
                        <div className="magazin_up">
                            <span className="ma_sub">TNGT Look</span>
                            <div className="ma_tit">
                                <span>외출하고 싶어지는</span><br></br>
                                <span>가디건 스타일링</span>
                            </div>
                            <div className="ma_text">
                                <span>완벽한 봄날 외출 준비를 하시는 여러분들을 위한 심플한</span><br></br>
                                <span>가디건 스타일링 팁!</span>
                            </div>
                        </div>
                    </div>
                    <div className="m_wrap_down">
                        <div className="magazin_down">
                            <span className="ma_sub">TNGT Look</span>
                            <div className="ma_tit">
                                <span>TNGT 온라인 전용</span><br></br>
                                <span>아우터</span>
                            </div>
                            <div className="ma_text">
                                <span>올해, 나만의 인싸 패션을 책임질 TNGT온라인 전용</span><br></br>
                                <span>아우터를 소개한다.</span>
                            </div>
                        </div>
                        <img src={`${imageURI['magazin2']}`}/>
                    </div>
                </div>
                <div className="sns">
                    <div className="sns_tit">
                        <span>SNS</span>
                    </div>
                    <div className="sns_imgs">
                        <div className="sns_img">
                            <img src={`${imageURI['sns1']}`} />
                            <div className="sns_icon">
                                <img className="sns_icon1" src={`${imageURI['snsIcon']}`} />
                            </div>
                        </div>
                        <div className="sns_img">
                            <img src={`${imageURI['sns2']}`} />
                            <div className="sns_icon">
                                <img className="sns_icon1" src={`${imageURI['snsIcon']}`} />
                            </div>
                        </div>
                        <div className="sns_img">
                            <img src={`${imageURI['sns3']}`} />
                            <div className="sns_icon">
                                <img className="sns_icon1" src={`${imageURI['snsIcon']}`} />
                            </div>
                        </div>
                        <div className="sns_img">
                            <img src={`${imageURI['sns4']}`} />
                            <div className="sns_icon">
                                <img className="sns_icon1" src={`${imageURI['snsIcon']}`} />
                            </div>
                        </div>
                        <div className="sns_img">
                            <img src={`${imageURI['sns5']}`} />
                            <div className="sns_icon">
                                <img className="sns_icon1" src={`${imageURI['snsIcon']}`} />
                            </div>
                        </div>
                        <div className="sns_img">
                            <img src={`${imageURI['sns6']}`} />
                            <div className="sns_icon">
                                <img className="sns_icon1" src={`${imageURI['snsIcon']}`} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
           <Footer />
        </div>
    );
};

export default Home;
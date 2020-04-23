import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import { BestItems, BestSNSitem, Footer } from '../../component';
import imageURI from '../../globals/imageURI';

const BEST_ITEMS = [
    {id: 1, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'ex'},
    {id: 2, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'ex'},
    {id: 3, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'ex'},
    {id: 4, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'ex'},
    {id: 5, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'ex'},
    {id: 6, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'ex'},
    {id: 7, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'ex'},
    {id: 8, name:'dd', price: 1000, price2: 880, sale: '24%', src: 'ex'}
];
const SNS_ITEMS = [
    {id:1, src: 'sns1', src2: 'ico_sns'},
    {id:2, src: 'sns2', src2: 'ico_sns'},
    {id:3, src: 'sns3', src2: 'ico_sns'},
    {id:4, src: 'sns4', src2: 'ico_sns'},
    {id:5, src: 'sns5', src2: 'ico_sns'},
    {id:6, src: 'sns6', src2: 'ico_sns'}
]

const Home = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoSpeed: 500,
        cssEase: "linear",
        pauseOnHover: false
      };
    const setting2 = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoSpeed: 2000,
        cssEase: "linear"
      };
      
    return (
        <div className="container">
            <button className="btn_up">
                <img src={`${imageURI['topBtn']}`} />
            </button>
            <div className="banner">
                <Slider {...setting}>
                    <div className="slide slide1">
                    </div>
                    <div className="slide slide2">
                    </div>
                    <div className="slide slide3">
                    </div>
                    <div className="slide slide4">
                    </div>
                    <div className="slide slide5">
                    </div>
                    <div className="slide slide6">
                    </div>
                    {/* slick-active opacity1/0.3 */}
                </Slider>
                {/* <div className="dot_box">
                    <div className="dot"></div> 
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div> */}
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
                    <Slider { ...setting }>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                        {/* {BEST_ITEMS.map((item, index) => (
                            <BestItems index={index} items={item} key={`BESTITEM${item.id}`} />
                        ))} */}
                    </Slider>
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
                        {SNS_ITEMS.map((item, index) => (
                            <BestSNSitem index={index} item={item} key={`SNSITEM${item.id}`} />
                        ))}
                    </div>
                </div>
            </div>
           <Footer />
        </div>
    );
};

export default Home;
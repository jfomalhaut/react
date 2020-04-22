import React from 'react';
import './Magazin.css';
import { MagazinItem, Footer } from '../../component';

const MAGAZIN_ITEMS = [
    {id: 1, title: aa, text: ttt, itemTitle1: asd, itemTitle2: asd, itemTitle3: asd, itemTitle4: asd, src: `${imageURI['ex']}`, src2: `${imageURI['ex']}`, src3: `${imageURI['ex']}`, src4: `${imageURI['ex']}`, src5: `${imageURI['ex']}`},
    {id: 2, title: aa, text: ttt, itemTitle1: asd, itemTitle2: asd, itemTitle3: asd, itemTitle4: asd, src: `${imageURI['ex']}`, src2: `${imageURI['ex']}`, src3: `${imageURI['ex']}`, src4: `${imageURI['ex']}`, src5: `${imageURI['ex']}`},
    {id: 3, title: aa, text: ttt, itemTitle1: asd, itemTitle2: asd, itemTitle3: asd, itemTitle4: asd, src: `${imageURI['ex']}`, src2: `${imageURI['ex']}`, src3: `${imageURI['ex']}`, src4: `${imageURI['ex']}`, src5: `${imageURI['ex']}`},
    {id: 4, title: aa, text: ttt, itemTitle1: asd, itemTitle2: asd, itemTitle3: asd, itemTitle4: asd, src: `${imageURI['ex']}`, src2: `${imageURI['ex']}`, src3: `${imageURI['ex']}`, src4: `${imageURI['ex']}`, src5: `${imageURI['ex']}`}
];

const Magazin = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="maga_tit">
                <span>TNGT LOOK</span>
            </div>
            <div className="maga_look">
                {MAGAZIN_ITEMS.map((index, item) => (
                    <MagazinItem index={index} items={item} key={`MAGAZINI${index}`} />
                ))}
                {/* <div className="maga_item">
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
                </div> */}
            </div>
           <Footer />
        </div>
    );
};

export default Magazin;
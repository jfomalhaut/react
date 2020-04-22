import React from 'react';

const MagazinItem = ({ items:{ title, text, itemTitle1, itemTitle2, itemTitle3, itemTitle4, src, src2, src3, src4, src5 }, index }) => {
    return (
        <div className="maga_item" key={`MAGAZINI${index}`}>
            <div className="maga_main">
                <img className="maga_img" src={src} />
                <div className="maga_title">
                    <span className="name">외출 하고 싶어지는 가디건 스타일링{title}</span>
                    <span className="dec">완전한 봄날 외출 준비를 하시는 여러분을 위한 심플한 가디건 스타일링 팁!{text}</span>
                </div>
            </div>
            <div className="maga_sub">
                <div className="sub_item">
                    <img className="sub_img" src={src2} />
                    <div className="sub_tit">
                        <span>[BLACK]컬러 배색 가디건{itemTitle1}</span>
                    </div>
                </div>
                <div className="sub_item">
                    <img className="sub_img" src={src3} />
                    <div className="sub_tit">
                        <span>[BLACK]컬러 배색 가디건{itemTitle2}</span>
                    </div>
                </div>
                <div className="sub_item">
                    <img className="sub_img" src={src4} />
                    <div className="sub_tit">
                        <span>[BLACK]컬러 배색 가디건{itemTitle3}</span>
                    </div>
                </div>
                <div className="sub_item">
                    <img className="sub_img" src={src5} />
                    <div className="sub_tit">
                        <span>[BLACK]컬러 배색 가디건{itemTitle4}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagazinItem;
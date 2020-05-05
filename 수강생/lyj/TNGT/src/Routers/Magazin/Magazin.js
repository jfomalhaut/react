import React, { useState, useEffect } from 'react';
import './Magazin.css';
import { MagazinItem, Footer } from '../../component';
import imageURI from './../../globals/imageURI';

const MAGAZIN_ITEMS = [
    {id: 1, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine1', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 4 },
    {id: 2, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine2', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 4 },
    {id: 3, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine3', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 3 },
    {id: 4, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine4', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 4 },
    {id: 5, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine5', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 2 },
    {id: 6, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine6', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 4 },
    {id: 7, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine7', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 2 },
    {id: 8, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine8', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 3 },
    {id: 9, title: 'title입니다', text: 'tttext입니다 입니다 입니다', itemTitle1: 'asd111', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'magazine9', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex', sub_items: 4 }
];

const Magazin = ({ match }) => {
    const [ small, setSmall ] = useState("");
    const { params: { sub_items }} = match;

    useEffect (() => {
        if (sub_items) {
            return;
        } else {
            setSmall("");
        };
    }, []);

    // const setSmall = val => {
    //     if ( match === 4) {
    //         setSmall("m_type1");
    //     } else if (match === 3) {
    //         setSmall("m_type2");
    //     } else {
    //         setSmall("m_type3");
    //     };
    // };

    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="maga_tit">
                <span>TNGT LOOK</span>
            </div>
            <div className="maga_look">
                {MAGAZIN_ITEMS.map((item, index) => (
                    <MagazinItem small={small} index={index} item={item} key={`MAGAZINI${item.id}`} />
                ))}
            </div>
           <Footer />
        </div>
    );
};

export default Magazin;
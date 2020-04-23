import React from 'react';
import './Magazin.css';
import { MagazinItem, Footer } from '../../component';

const MAGAZIN_ITEMS = [
    {id: 1, title: 'aa', text: 'ttt', itemTitle1: 'asd', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'ex', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex'},
    {id: 2, title: 'aa', text: 'ttt', itemTitle1: 'asd', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'ex', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex'},
    {id: 3, title: 'aa', text: 'ttt', itemTitle1: 'asd', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'ex', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex'},
    {id: 4, title: 'aa', text: 'ttt', itemTitle1: 'asd', itemTitle2: 'asd', itemTitle3: 'asd', itemTitle4: 'asd', src: 'ex', src2: 'ex', src3: 'ex', src4: 'ex', src5: 'ex'}
];

const Magazin = () => {
    return (
        <div className="container">
            <button className="btn_up"></button>
            <div className="maga_tit">
                <span>TNGT LOOK</span>
            </div>
            <div className="maga_look">
                {MAGAZIN_ITEMS.map((item, index) => (
                    <MagazinItem index={index} items={item} key={`MAGAZINI${item.id}`} />
                ))}
            </div>
           <Footer />
        </div>
    );
};

export default Magazin;
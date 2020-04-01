import React from 'react';
import { GoCheck } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import Actions from '../actions';
const nf = new Intl.NumberFormat();

const cartItem = ({item: { id, name, src, price, check, count } }) => {
    const dispatch = useDispatch ();
    //값을 보낼떄 dispatch
    //값을 받을때  useSelector

    const onDelete = () =>{
        dispatch(Actions.cartAction.removeCart(id));
    };
    
    const onCheck = () => {
        dispatch(Actions.cartAction.onCheck(id));
    };

	return (
		<div className="item">
			<div className="img">
				<img src={src} />
			</div>
			<div className="info">
				<div className="name">{name}</div>
				<div className="price">{nf.format(price * count)}원</div>
                <div className="count">
                    {count}개{count > 1 && <span className="pricePerCount">1개당 {nf.format(price)}원</span>}
                </div> 
                {/* 앞에 있는 조건이 맞으면 && */}
				<button className="delete" onClick={onDelete}>삭제</button>
			</div>
			<div className="checkbox">
				<span className={ check ? 'active' : ''} onClick={onCheck}>
					<GoCheck />
				</span>
			</div>
		</div>
	);
};

export default cartItem;
const CartReducer = (state, {type, data}) => {
	switch(type) {
		case 'ADD_CART': {
			const flag = state.cart.some(item => item.id === data.id);
			let after = [];
			if (flag) { // 장바구니에 이미 담겨 있는 경우
				after = state.cart.map(item => (
					item.id === data.id ? ({ ...item, count: item.count + 1}) : item
				));
			} else { // 장바구니에 해당 상품이 없는 경우
				after = state.cart.concat({...data, count: 1, check: false });
			}
			state.cart = after;
			return { ...state };
		}

		case 'REMOVE_ALL': {
			state.cart = [];
			return { ... state };
		}

		case 'SET_COUNT': {
			const after = state.cart.map(item => (
				item.id === data.id ? ({ ...item, count: data.count }) : item
			));
			state.cart = after;
			return {...state};
		}
		
		case 'REMOVE_ITEM': {
			const after = state.cart.filter(item => item.id !== data.id);
			state.cart = after;
			return { ...state };
		}
	}
};

export default CartReducer;
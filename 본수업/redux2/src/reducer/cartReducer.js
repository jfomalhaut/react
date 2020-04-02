const initailValue = {
	cart: []
};

const cartReducer = (state = initailValue, { data, type }) => {
	switch (type) {
		case 'addCart': {
			const itemList = state.cart.map(item => item.id);
			const flag = itemList.indexOf(data.id);

<<<<<<< HEAD
			if (flag === -1) { // 장바구니에 없다는 뜻
				state.cart = state.cart.concat({ ...data, count: 1});
			} else { // 장바구니에 이미 담겨있다는 뜻
				state.cart = state.cart.map((item, index) => {
					if (index === flag) {
						return { ...item, count: (item.count + 1) };
					} else {
=======
			if(flag === -1) { // 장바구니내에 없는것
				state.cart = state.cart.concat({ ...data, count:1});
			}else{
				state.cart = state.cart.map((item, index)=>{
					if(index===flag){ // 장바구니내에 이미 있는것
						return{...item, count:(item.count +1)};
					}else{
>>>>>>> 8aad0fb3326d97b34d7045804f42dd57a80fa8ab
						return item;
					}
				});
			}
<<<<<<< HEAD
			return { ...state };
=======
			return{...state};
>>>>>>> 8aad0fb3326d97b34d7045804f42dd57a80fa8ab
		}

		case 'removeCart': {
			state.cart = state.cart.filter(item => {
				return item.id !== data;
			});
			return { ...state };
		}

		case 'removeAll': {
			state.cart = [];
			return { ...state };
		}

<<<<<<< HEAD
		case 'onCheck': {
			state.cart = state.cart.map(item => {
				if (item.id === data) {
					return ({ ...item, check: !item.check});
				} else {
=======
		case 'onCheck' : {
			state.cart = state.cart.map(item =>{
				if(item.id === data){
					return({...item, check:!item.check});
				}else{
>>>>>>> 8aad0fb3326d97b34d7045804f42dd57a80fa8ab
					return item;
				}
			});
			return state;
		}

<<<<<<< HEAD
		case 'checkAll': {
			// some을 쓸 때 조건문에 해당하는게 하나라도 있으면 true, 없으면 false를 return 한다.
			// 체크가 모두 되었으면 FLAG는 false가 된다.
			// 체크가 하나라도 되지 않은게 있으면 Flag는 true가 된다.
			const flag = state.cart.some(item => item.check === false);
			state.cart = state.cart.map(item => ({ ...item, check: flag}));
			return state;
		}

		case 'removeCheck': {
=======
		case 'checkAll' :{
			//some 을 쓸 떄 조건문에 해당하는게 하나라도 있으면 true, 없음녀 false를 return한다
			//체크가 모두 되었으면 Flag는 false가 된다
			// 체크가 하나라고 되지 않으게 있으면 flag는 true가 된다
			const flag = state.cart.some(item => item.check === false);
			state.cart = state.cart.map(item => ({...item, check:flag}));
			return state;
		}
		
		case 'removeCheck' :{
>>>>>>> 8aad0fb3326d97b34d7045804f42dd57a80fa8ab
			state.cart = state.cart.filter(item => !item.check);
			return state;
		}

<<<<<<< HEAD


=======
>>>>>>> 8aad0fb3326d97b34d7045804f42dd57a80fa8ab
		default: { return state; }
	}
};

export default cartReducer;

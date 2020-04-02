const initailValue = {
    cart: []
};

const cartReducer = ( state = initailValue, { data, type } ) => {
    switch(type) {
        case 'addCart': {
            const itemList = state.cart.map(item => item.id);
            const flag = itemList.indexOf(data.id);

            if ( flag === -1 ) { // 장바구니 내에 없다는 뜻
                state.cart = state.cart.concat({ ...data, count: 1});
            } else { // 장바구니 내에 이미 담겨 있다는 뜻
                state.cart = state.cart.map((item, index) => {
                    if ( index === flag ) {
                        return { ...item, count: (item.count + 1)};
                    } else {
                        return item;
                    }
                });
            }
            return { ...state };
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
        default: { return state; }

        case 'onCheck': {
            state.cart = state.cart.map(item => {
                if ( item.id === data ) {
                    return ({ ...item, check: !item.check});
                } else {
                    return item;
                }
            });
            return state;
        }

        case 'checkAll': { 
            // some: 조건문에 해당하는게 하나라도 있으면 true, 없으면 false를 return 한다
            // 체크가 모두 되었므녀 flag는 flase가 된다.
            // 체크가 하나라도 되지 않은게 있으면 flag는 true가 된다.
            const flag = state.cart.some(item => item.check === false);
            state.cart = state.cart.map(item => ({ ...item, check: flag}));
            return state;
        }

        case 'removeCheck': {
            state.cart = state.cart.filter(item => !item.check);
            return state;
        }
    }
};

export default cartReducer;
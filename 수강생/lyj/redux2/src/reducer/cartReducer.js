const initailValue = {
    cart: []
};

const cartReducer = ( state = initailValue, { data, type } ) => {
    switch(type) {
        case 'addCart': {
            const itemList = state.cart.map(item => item.id); //아이템을 아이템id만 가져온다
            const flag = itemList.indexOf(data.id); //없으면 -1이뜸, itemList에 있는 id의 인덱스를 가져오기

            if(flag === -1) { //장바구니 내에 없다는 뜻
                state.cart = state.cart.concat({ ...data, count: 1});
            } else {
                state.cart = state.cart.map((item, index) => {
                    if (index === flag) { //장바구니 내에 있다는 뜻
                        return { ...item, count:(item.count + 1) };
                    } else {
                        return item;
                    }
                });
            }
            return { ...state };
            // state.cart = state.cart.concat({ ...data, count: 1}); //data는 item임, 카운트1은 수량추가
            // return { ...state };
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

        case 'onCheck': {
            state.cart = state.cart.map(item => { //state.cart는 덮어쓰기
                if (item.id === data) { //Action에서 data는 id로 보냄
                    return ({ ...item, check: !item.check}); //중괄호가 추가됬으므로 return써야함
                } else {
                    return item;
                }
            });
            return state;
        }

        case 'checkAll': {
            // some: 조건문에 해당하는게 하나라도 있으면 true, 없으면 false를 return한다.
            // 체크가 모두 되어있으면 FLAG는 false가 되고 하나라도 체크가 안되어있으면 true가 된다
            const flag = state.cart.some(item => item.check === false);
            state.cart = state.cart.map(item => ({ ...item, check: flag})); 
            // state.cart = state.cart.map(item => ({ ...item, check: true})); //중괄호 없어서 return안씀
            return state;
        }

        case 'removeCheck': {
            state.cart = state.cart.filter(item => !item.check);
            return state;
        }

        default: { return state; }
    }
};

export default cartReducer;
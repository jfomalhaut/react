const initailvalue ={
    cart: []
};

const cartReducer = ( state = initailvalue, { data, type } ) => {
    switch (type) {
        case 'addCart': {
            state.cart = state.cart.concat({ ...data, count:1 });
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
        default: { return state;};
    }
}

export default cartReducer;
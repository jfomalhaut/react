const addCart = item => {
    return {
        type: 'addCart',
        data: item
    };
};

const removeCart = item => {
    return {
        type: 'removeCart',
        data: item
    };
};

const removeAll = () => {
    return {
        type: 'removeAll'
    };
};

export default {
    addCart,
    removeCart,
    removeAll
}
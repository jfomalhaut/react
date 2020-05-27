const UrlReducer = (state, { type, data }) => {
    switch(type) {
        case 'SET_URL' : {
            return { ...state, url:data };
        }
    }
}

export default UrlReducer;
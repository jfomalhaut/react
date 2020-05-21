const UrlReducer = (state,  { type, data }) => {
    switch(type) {
        case 'SET_URL' : {
            state.url = data;
            return {...state, url : data};
        }
    }
};

export default UrlReducer;
// state: 저장소, 값을 보관하는 역할
// action: 
//type과 data로 이루어져있다.
//2. type은 역할
//3. data는 역할에 맞는 값을 의미
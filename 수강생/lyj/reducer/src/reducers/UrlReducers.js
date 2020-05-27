// const UrlReducers = (state, action) => {
//     switch(action.type) {
//         case 'SET_URL' : {
//             state.url = action.data;
//             return state;
//         }
//     }
// }
const UrlReducers = (state, { type, data }) => {
    switch(type) {
        case 'SET_URL' : {
            return { ...state, url:data };
        }
    }
}

export default UrlReducers;

//state: 저장소, 값을 저장하는 역할
//action: type과 data로 이루어져있다, type은 역할(종류) data는 역할에 맞는 값을 의미
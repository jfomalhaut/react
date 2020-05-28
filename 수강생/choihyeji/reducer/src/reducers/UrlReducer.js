// const UrlReducer = (state, action) => {
//     switch(action.type) {
//         case 'SET_URL' : {
//             state.url = action.data;
//             return action;
//         }
//     }
// };


// action을 쪼개서 가져올 때
const UrlReducer = (state, { type, data }) => {
    switch(type) {
        case 'SET_URL' : {
            return { ...state, url: data};
        }
    }
};

export default UrlReducer;

// state : 저장소, 값을 보관하는 역할
// action : 
        // 1. type과 data로 이루어져 있다.
        // 2. type: 역할, data: 역할에 맞는 값

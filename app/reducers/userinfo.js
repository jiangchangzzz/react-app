import * as actionTypes from '../constants/userinfo';

const initialState={
    cityName: null,
    username: null
};

const userinfo=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.UPDATE_USERINFO:
            return Object.assign({},state,action.payload);
        case actionTypes.LOGOUT_USERINFO:
            return {
                ...state,
                username: null
            };
        default:
            return state;
    }
};

export default userinfo; 
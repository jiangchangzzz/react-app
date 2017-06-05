import * as actionTypes from '../constants/userinfo';

export const update=(payload)=>{
    return {
        type: actionTypes.UPDATE_USERINFO,
        payload
    };
};

export const logout=()=>{
    return {
        type: actionTypes.LOGOUT_USERINFO
    };
};

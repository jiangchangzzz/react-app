import * as actionTypes from '../constants/info';

const getInfoStart=()=>{
    return {
        type: actionTypes.GET_INFO_START
    };
};

const getInfoSuccess=(data)=>{
    return {
        type: actionTypes.GET_INFO_SUCCESS,
        payload: data
    };
};

const getInfoFailure=(error)=>{
    return {
        type: actionTypes.GET_INFO_FAILURE,
        error: error
    };
};

export const getInfo=(id)=>{
    return (dispatch,getState)=>{
        const url=`/api/detail/info/${id}`;
        dispatch(getInfoStart());
        fetch(url)
            .then(response=>response.json())
            .then(json=>dispatch(getInfoSuccess(json)))
            .catch(error=>dispatch(getInfoFailure(error)));
    };
};
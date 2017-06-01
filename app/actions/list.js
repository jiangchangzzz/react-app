import * as actionTypes from '../constants/list';

const getListStart=()=>{
    return {
        type: actionTypes.GET_LIST
    };
};

const getListSuccess=(data)=>{
    return {
        type: actionTypes.GET_LIST_SUCCESS,
        payload: data
    };
};

const getListFailure=(error)=>{
    return {
        type: actionTypes.GET_LIST_FAILURE,
        error: error
    };
};

export const getList=(city,page)=>{
    return (dispatch,getState)=>{
        dispatch(getListStart());
        const url=`/api/list/${encodeURIComponent(city)}/${page}`;
        fetch(url)
            .then(response=>response.json())
            .then(json=>dispatch(getListSuccess(json)))
            .catch(error=>dispatch(getListFailure(error)));
    };
};
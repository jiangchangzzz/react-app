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

const addListSuccess=(data)=>{
    return {
        type: actionTypes.ADD_LIST_SUCCESS,
        payload: data
    };
};

const getListFailure=(error)=>{
    return {
        type: actionTypes.GET_LIST_FAILURE,
        error: error
    };
};

const url='/api/list';

export const getList=(city)=>{
    return (dispatch,getState)=>{
        dispatch(getListStart());
        const fullUrl=`${url}/${encodeURIComponent(city)}/0`;
        fetch(fullUrl)
            .then(response=>response.json())
            .then(json=>dispatch(getListSuccess(json)))
            .catch(error=>dispatch(getListFailure(error)));
    };
};

export const addList=(city,page)=>{
    return (dispatch,getState)=>{
        dispatch(getListStart());
        const fullUrl=`${url}/${encodeURIComponent(city)}/${page}`;
        fetch(fullUrl)
            .then(response=>response.json())
            .then(json=>dispatch(addListSuccess(json)))
            .catch(error=>dispatch(getListFailure(error)));
    };
};
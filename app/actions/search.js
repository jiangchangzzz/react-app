import * as actionTypes from '../constants/search';

const getSearchStart=()=>{
    return {
        type: actionTypes.GET_SEARCH
    };
};

const addSearchSuccess=(data)=>{
    return {
        type: actionTypes.ADD_SEARCH_SUCCESS,
        payload: data
    };
};

const getSearchSuccess=(data)=>{
    return {
        type: actionTypes.GET_SEARCH_SUCCESS,
        payload: data
    };
};

const getSearchFailure=(error)=>{
    return {
        type: actionTypes.GET_SEARCH_FAILURE,
        error: error
    };
};

const url='/api/search';

export const getSearch=(keyword)=>{
    return (dispacth,getState)=>{
        const fullUrl=`${url}/${encodeURIComponent(keyword)}/0`;
        dispacth(getSearchStart());
        fetch(fullUrl)
            .then(response=>response.json())
            .then(json=>dispacth(getSearchSuccess(json)))
            .catch(error=>dispacth(getSearchFailure(error)));
    };
};

export const addSearch=(keyword,page)=>{
    return (dispatch,getState)=>{
        const fullUrl=`${url}/${encodeURIComponent(keyword)}/${page}`;
        dispatch(getSearchStart());
        fetch(fullUrl)
            .then(response=>response.json())
            .then(json=>dispatch(addSearchSuccess(json)))
            .catch(error=>dispatch(getSearchFailure(error)));
    };
};
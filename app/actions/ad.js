import * as actionTypes from '../constants/ad';

const adRequest=()=>{
    return {
        type: actionTypes.AD_REQUEST
    };
};

const adSuccess=(data)=>{
    return {
        type: actionTypes.AD_SUCCESS,
        payload: data
    };
};

const adFailure=(error)=>{
    return {
        type: actionTypes.AD_FAILURE,
        error: error
    };
};

export const getAd=()=>{
    return (dispatch,getState)=>{
        const url='/api/ad';
        dispatch(adRequest());
        fetch(url)
            .then(response=>response.json())
            .then(json=>dispatch(adSuccess(json)))
            .catch(error=>adFailure(error));
    }
}
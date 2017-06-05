import * as actionTypes from '../constants/collection';

export const updateCollection=(data)=>{
    return {
        type: actionTypes.UPDATE_COLLECTION,
        payload: data
    };
};

export const addCollection=(item)=>{
    return {
        type: actionTypes.ADD_COLLECTION,
        payload: item
    };
};

export const removeCollection=(item)=>{
    return {
        type: actionTypes.REMOVE_COLLECTION,
        payload: item
    };
};
import * as actionTypes from '../constants/info';

const initialState={
    isFetching: true,
    data: [],
    error: null
};

const info=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_INFO_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case actionTypes.GET_INFO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case actionTypes.GET_INFO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default info;
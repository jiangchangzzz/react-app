import * as actionTypes from '../constants/search';

const initialState={
    isFetching: true,
    data: [],
    hasMore: false,
    error: null
};

const search=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_SEARCH:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case actionTypes.GET_SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data,
                hasMore: action.payload.hasMore
            };
        case actionTypes.ADD_SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: state.data.concat(action.payload.data),
                hasMore: action.payload.hasMore
            };
        case actionTypes.GET_SEARCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default search;
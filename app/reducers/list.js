import * as actionTypes from '../constants/list';

const initialState={
    isFetching: true,
    data: [],
    error: null
};

const list=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_LIST:
            return Object.assign({},state,{
                isFetching: true,
                error: null
            });
        case actionTypes.GET_LIST_SUCCESS:
            return Object.assign({},state,{
                isFetching: false,
                data: action.payload
            });
        case actionTypes.GET_LIST_FAILURE:
            return Object.assign({},state,{
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
};

export default list;
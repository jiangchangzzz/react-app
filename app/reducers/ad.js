import * as actionTypes from '../constants/ad';

const initialState={
    isfetching: false,
    data: [],
    error: null
};

const ad=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.AD_REQUEST:
            return Object.assign({},state,{
                isfetching: true,
                error: null
            });
        case actionTypes.AD_SUCCESS:
            return Object.assign({},state,{
                isfetching: false,
                data: action.payload
            });
        case actionTypes.AD_FAILURE:
            return Object.assign({},state,{
                isfetching: false,
                error: action.error
            });
        default: 
            return state;
    }
};

export default ad;
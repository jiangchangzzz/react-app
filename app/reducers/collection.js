import * as actionTypes from '../constants/collection';

const initalState=[];

const collection=(state=initalState,action)=>{
    switch(action.type){
        case actionTypes.UPDATE_COLLECTION:
            return action.payload;
        case actionTypes.ADD_COLLECTION:
            return [action.payload,...state];
        case actionTypes.REMOVE_COLLECTION:
            return state.filter((item)=>item!==action.payload);
        default:
            return state;
    }
};

export default collection;
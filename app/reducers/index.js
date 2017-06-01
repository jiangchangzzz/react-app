import {combineReducers} from 'redux';
import userinfo from './userinfo';
import ad from './ad';
import list from './list';

const rootReducer=combineReducers({
    userinfo,
    ad,
    list
});

export default rootReducer;
import {combineReducers} from 'redux';
import userinfo from './userinfo';
import ad from './ad';
import list from './list';
import search from './search';
import info from './info';

const rootReducer=combineReducers({
    userinfo,
    ad,
    list,
    search,
    info
});

export default rootReducer;
import {combineReducers} from 'redux';
import userinfo from './userinfo';
import ad from './ad';
import list from './list';
import search from './search';
import info from './info';
import collection from './collection';

const rootReducer=combineReducers({
    userinfo,
    ad,
    list,
    search,
    info,
    collection
});

export default rootReducer;
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore=(initialState)=>{
    const store=createStore(rootReducer,initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
    return store;
};

export default configureStore;
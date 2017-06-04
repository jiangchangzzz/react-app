import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from '../containers';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import City from '../containers/City';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
import PrivateRoute from './PrivateRoute';
import Register from '../containers/Register'; 
import Forget from '../containers/Forget';

class RouterMap extends Component{
    render(){
        return (
            <App>
                <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/city" component={City}/>
                            <Route path="/search/:keyword" component={Search}/>
                            <Route path="/detail/:id" component={Detail}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/forget" component={Forget}/>
                            <PrivateRoute path="/user" component={User}/>
                            <Route component={NotFound}/>
                        </Switch>
                </Router>
            </App>
        );
    }
}

export default RouterMap;
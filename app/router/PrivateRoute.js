import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        const {component: Component,userinfo,redirect,...rest}=this.props;
        return (
            <Route {...rest} render={(props)=>(
                userinfo.username
                ? <Component {...props}/>
                : <Redirect to={{
                    pathname: redirect,
                    state: {from: props.location}
                }}/>
            )}/>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        userinfo: state.userinfo
    };
};

export default connect(
    mapStateToProps
)(PrivateRoute);
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../../components/Header';
import LoginComponent from '../../components/login';
import * as userinfoActions from '../../actions/userinfo';

class Login extends Component {
    login=(user)=>{
        const {userinfo,userinfoActions}=this.props;
        const newUserinfo={
            ...userinfo,
            username: user.username
        };
        userinfoActions.update(newUserinfo);
        this.goBack();
    }

    goBack=()=>{
        const {location,history}=this.props;
        const from=location.state.from;
        if(from){
            history.push(from.pathname);
        }
        else{
            history.push('/');
        }
    }

    render() {
        const {history,location}=this.props;
        return (
            <div>
                <Header title="用户登录" history={history}/>
                <LoginComponent login={this.login}/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        userinfo: state.userinfo
    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        userinfoActions: bindActionCreators(userinfoActions,dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
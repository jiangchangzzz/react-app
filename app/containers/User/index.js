import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../../components/Header';
import Userinfo from '../../components/Userinfo';
import Logout from '../../components/Logout';
import * as userinfoActions from '../../actions/userinfo';

class User extends Component {
    logout=()=>{
        const {userinfoActions,history}=this.props;
        userinfoActions.logout();
        history.push('/login');
    };

    render() {
        const {history,userinfo}=this.props;
        return (
            <div>
                <Header title="用户主页" history={history}/>
                <Userinfo data={userinfo}/>
                <Logout logout={this.logout}/>
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
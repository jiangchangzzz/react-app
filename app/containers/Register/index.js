import React, { Component } from 'react';

import Header from '../../components/Header';

class Register extends Component {
    render() {
        const {history}=this.props;
        return (
            <div>
                <Header title="用户注册" history={history}/>
            </div>
        );
    }
}

export default Register;
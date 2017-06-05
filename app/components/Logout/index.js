import React, { Component } from 'react';

import './style.scss';

class Logout extends Component {
    render() {
        const {logout}=this.props;
        return (
            <div className="logout">
                <button type="button" onClick={logout}>退出登录</button>
            </div>
        );
    }
}

export default Logout;
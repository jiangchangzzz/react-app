import React, { Component } from 'react';

import Header from '../../components/Header';

class Forget extends Component {
    render() {
        const {history}=this.props;
        return (
            <div>
                <Header title="忘记密码" history={history}/>
            </div>
        );
    }
}

export default Forget;
import React, { Component } from 'react';

import Info from './subpage/info';
import Header from '../../components/Header';
import Collection from './subpage/Collection';

class Detail extends Component {
    render() {
        const {match,history}=this.props;
        return (
            <div>
                <Header title="商户详情" history={history}/>
                <Info id={match.params.id}/>
                <Collection history={history} id={match.params.id}/>
            </div>
        );
    }
}

export default Detail;
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as detailActions from '../../../actions/info';
import DetailInfo from '../../../components/DetailInfo';

class Info extends Component {
    componentDidMount(){
        const {detailActions,id}=this.props;
        detailActions.getInfo(id);
    }

    render() {
        const {data}=this.props;
        return (
            <DetailInfo data={data}/>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        ...state.info
    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        detailActions: bindActionCreators(detailActions,dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);
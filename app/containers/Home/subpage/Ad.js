import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as adActions from '../../../actions/ad';
import HomeAd from '../../../components/HomeAd';

class Ad extends Component {
    componentDidMount(){
        this.props.adActions.getAd();
    }

    render() {
        const {isFetching,data,error}=this.props;
        if(isFetching){
            return <div>Loading...</div>;
        }
        else{
            if(error){
                return <div>{error.message}</div>;
            }
            else{
                return <HomeAd data={data}/>
            }
        }
    }
}

const mapStateToProps=(state)=>{
    return {
        ...state.ad
    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        adActions: bindActionCreators(adActions,dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ad);
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as listActions from '../../../actions/list';
import HomeList from '../../../components/HomeList';
import './style.scss';

class List extends Component {
    componentDidMount(){
        this.props.listActions.getList('wuhan',1);
    }

    render() {
        const {data,isFetching,error}=this.props;
        console.log(this.props);
        return (
            <div className="home-like">
                <h3 className="home-title">猜你喜欢</h3>
                {
                    isFetching
                    ? <div>Loading...</div>
                    : <HomeList data={data.data}/>
                }
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        ...state.list
    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        listActions: bindActionCreators(listActions,dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
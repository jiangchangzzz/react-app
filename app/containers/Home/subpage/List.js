import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as listActions from '../../../actions/list';
import HomeList from '../../../components/HomeList';
import LoadMore from '../../../components/LoadMore';
import './style.scss';

class List extends Component {
    constructor(props){
        super(props);

        this.nextPage=1;
    }

    loadMore=()=>{
        this.props.listActions.addList(this.props.cityName,this.nextPage);
        this.nextPage++;
    }

    componentDidMount(){
        this.props.listActions.getList(this.props.cityName);
    }

    render() {
        const {data,isFetching,error,hasMore}=this.props;
        return (
            <div className="home-like">
                <h3 className="home-title">猜你喜欢</h3>
                <HomeList data={data} />
                {
                    hasMore
                    ? <LoadMore isFetching={isFetching} loadMore={this.loadMore}/>
                    : ''
                }
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        ...state.list,
        cityName: state.userinfo.cityName
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
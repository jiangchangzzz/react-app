import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import List from '../../../components/HomeList';
import LoadMore from '../../../components/LoadMore';

import * as searchActions from '../../../actions/search';

class SearchList extends Component {
    constructor(props){
        super(props);

        this.nextPage=1;
    }

    componentDidMount(){
        const {keyword,searchActions}=this.props;
        searchActions.getSearch(keyword);
    }

    //处理重新搜索
    componentDidUpdate(preProps,preState){
        const {keyword,searchActions}=this.props;
        if(keyword!==preProps.keyword){
            searchActions.getSearch(keyword);
        }
    }

    loadMore=()=>{
        const {keyword,searchActions}=this.props;
        searchActions.addSearch(keyword,this.nextPage);
        this.nextPage++;
    }

    render() {
        const {isFetching,data,hasMore}=this.props
        return (
            <div>
                <List data={data}/>
                {
                    hasMore
                    ? <LoadMore loadMore={this.loadMore}/>
                    : ''
                }
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        ...state.search
    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        searchActions: bindActionCreators(searchActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList);
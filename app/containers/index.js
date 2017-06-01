import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import localStore from '../util/localStore';
import {CITY_NAME} from '../config/localStorageKey';
import * as userInfoActions from '../actions/userinfo';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            initDone: false
        };
    }

    componentDidMount(){
        //获取当前城市
        let cityName=localStore.getItem(CITY_NAME);
        if(cityName==null){
            cityName='武汉';
        }

        //将城市信息存入store中
        this.props.userInfoActions.update({
            cityName: cityName
        });

        this.setState({
            initDone: true
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>加载中...</div>
                }
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {};
}

const mapDispatchToProps=(dispatch)=>{
    return {
        userInfoActions: bindActionCreators(userInfoActions,dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
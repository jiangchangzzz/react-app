import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import * as userinfoActions from '../../actions/userinfo';
import localStore from '../../util/localStore';
import {CITY_NAME} from '../../config/localStorageKey';

class City extends Component {
    render() {
        return (
            <div>
                <Header title="城市列表"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeCity={this.changeCity}/>
            </div>
        );
    }

    changeCity=(cityName)=>{
        const {userinfo,userinfoActions,history}=this.props;
        const newUserinfo={...userinfo,cityName};
        userinfoActions.update(newUserinfo);

        localStore.setItem(CITY_NAME,cityName);

        history.push('/');
    }

}

const mapStateToProps=(state)=>{
    return {
        userinfo: state.userinfo
    };
};

const mapDipatchToProps=(dispatch)=>{
    return {
        userinfoActions: bindActionCreators(userinfoActions,dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(City);
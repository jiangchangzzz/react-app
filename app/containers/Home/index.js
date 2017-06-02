import React, { Component } from 'react';
import {connect} from 'react-redux';

import HomeHeader from '../../components/HomeHeader';
import Carousel from '../../components/Carousel';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends Component {
    enterKeyword=(newKeyword)=>{
        this.props.history.push(`/search/${newKeyword}`);
    };

    render() {
        const {userinfo}=this.props;
        return (
            <div>
                <HomeHeader cityName={userinfo.cityName} enterKeyword={this.enterKeyword}/>
                <Carousel/>
                <div style={{height: '14px'}}></div>
                <Ad/>
                <div style={{height: '14px'}}></div>
                <List cityName={userinfo.cityName}/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        userinfo: state.userinfo
    };
};

export default connect(
    mapStateToProps
)(Home);
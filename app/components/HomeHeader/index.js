import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.scss';
import SearchInput from '../SearchInput';

class HomeHeader extends Component {
    render() {
        return (
            <header className="home-header clear-fix">
                <div className="header-left">
                   <Link to="/city">
                        <span>{this.props.cityName}</span>
                        {' '}
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="header-right">
                    <i className="icon-user"></i>
                </div>
                <div className="header-mid">
                    <SearchInput enterKeyword={this.props.enterKeyword}/>
                </div>
            </header>
        );
    }
}

export default HomeHeader;
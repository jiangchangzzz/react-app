import React, { Component } from 'react';

import './style.scss';

class HomeHeader extends Component {
    render() {
        return (
            <header className="header clear-fix">
                <div className="header-left">
                    <span>{this.props.cityName}</span>
                    {' '}
                    <i className="icon-angle-down"></i>
                </div>
                <div className="header-right">
                    <i className="icon-user"></i>
                </div>
                <div className="header-mid">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default HomeHeader;
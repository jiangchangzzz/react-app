import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';
import SearchInput from '../SearchInput';

class HomeHeader extends Component {
    static propTypes={
        cityName: PropTypes.string.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired
    };

    enterKeyword=(value)=>{
        this.props.history.push(`/search/${encodeURIComponent(value)}`);
    };

    render() {
        const {cityName,history}=this.props;
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
                    <Link to="/user">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="header-mid">
                    <SearchInput enterKeyword={this.enterKeyword}/>
                </div>
            </header>
        );
    }
}

export default HomeHeader;
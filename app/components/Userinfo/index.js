import React, { Component } from 'react';

import './style.scss';

class Userinfo extends Component {
    render() {
        const {data}=this.props;
        return (
            <div className="userinfo">
                <p className="info-group">
                    <i className="icon-user"></i>
                    <span>{data.username}</span>
                </p>
                <p className="info-group">
                    <i className="icon-map-marker"></i>
                    <span>{data.cityName}</span>
                </p>
            </div>
        );
    }
}

export default Userinfo;
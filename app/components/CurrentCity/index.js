import React, { Component } from 'react';

import './style.scss';

class CurrentCity extends Component {
    render() {
        return (
            <div className="current-city">
                {this.props.cityName}
            </div>
        );
    }
}

export default CurrentCity;
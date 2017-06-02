import React, { Component } from 'react';

import './style.scss';

class Header extends Component {
    handleClick=()=>{
        history.back();
    }

    render() {
        return (
            <div className="header"> 
                <div className="header-icon" onClick={this.handleClick}>
                    <i className="icon-chevron-left"></i>
                </div>
                <h1 className="header-title">{this.props.title}</h1>
            </div>
        );
    }
}

export default Header;
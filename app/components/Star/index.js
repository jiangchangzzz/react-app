import React, { Component } from 'react';

import './style.scss';

class Star extends Component {
    render() {
        const {num}=this.props;
        return (
            <span className="star">
                {[1,2,3,4,5].map((item,index)=>(
                    <i key={index} className={`icon-star ${item<=num?'light':''}`}></i>
                ))}
            </span>
        );
    }
}

export default Star;
import React, { Component } from 'react';

import './style.scss';

class Item extends Component {
    render() {
        const data=this.props.data;
        return (
            <li className="list-item clear-fix">
                <div className="item-img-container">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="title">{data.title}</h3>
                        <span className="distance">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price">￥{data.price}</span>
                        <span className="mumber">已售{data.mumber}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default Item;
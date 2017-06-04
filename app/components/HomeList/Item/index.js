import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

class Item extends Component {
    render() {
        const data=this.props.data;
        return (
            <li className="list-item clear-fix">
                <Link to={`/detail/${data.id}`}>
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
                </Link>
            </li>
        );
    }
}

export default Item;
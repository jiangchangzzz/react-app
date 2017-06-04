import React, { Component } from 'react';

import './style.scss';
import Star from '../Star';

class DetailInfo extends Component {
    render() {
        const {data}=this.props;
        return (
            <div className="detail-info">
                <div className="info-container clear-fix">
                    <div className="info-img">
                        <img src={data.img} alt={data.title}/>
                    </div>
                    <div className="info-text">
                        <h2>{data.title}</h2>
                        <p>
                            <Star className="star" num={data.star}/>
                            <span className="price">￥{data.price}</span>
                        </p>
                        <p className="subTitle">{data.subTitle}</p>
                    </div>
                </div>
                <p className="description" dangerouslySetInnerHTML={{__html: data.desc}}></p>
            </div>
        );
    }
}

export default DetailInfo;
import React, { Component } from 'react';
import './style.scss';

class HomeAd extends Component {
    render() {
        const {data}=this.props;
        return (
            <div className="home-ad">
                <h3 className="home-title">超值特惠</h3>
                <ul className="ad-list clear-fix">
                    {data.map((item,index)=>(
                        <li key={index} className="ad-item">
                            <a href={item.link}>
                                <img src={item.img}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default HomeAd;
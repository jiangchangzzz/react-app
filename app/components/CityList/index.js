import React, { Component } from 'react';

import './style.scss';

class CityList extends Component {
    citys=['北京','上海','杭州','广州','苏州','深圳','南京','天津',
        '重庆','厦门','武汉','西安']; 

    renderCity(cityName,index){
        return (
            <li key={index}><div className="block-text" onClick={()=>{this.props.changeCity(cityName)}}>{cityName}</div></li>
        );
    }

    render() {
        return (
            <div className="city-list">
                <h3 className="city-title">热门城市</h3>
                <ul className="city-block clear-fix">
                    {this.citys.map((city,index)=>(
                        this.renderCity(city,index)
                    ))}
                </ul>
            </div>
        );
    }
}

export default CityList;
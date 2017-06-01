import React, { Component } from 'react';

import './style.scss';
import Item from './Item';

class HomeList extends Component {
    render() {
        const {data}=this.props;
        console.log(data);
        return (
            <ul>
                {data.map((item,index)=>(
                    <Item key={index} data={item}/>
                ))}
            </ul>
        );
    }
}

export default HomeList;
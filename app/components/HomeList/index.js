import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Item from './Item';

class HomeList extends Component {
    static propTypes={
        data: PropTypes.arrayOf(
            PropTypes.shape({
                img: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                distance: PropTypes.string.isRequired,
                subTitle: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                mumber: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    };

    render() {
        const {data}=this.props;
        return (
            <ul className="home-list">
                {data.map((item,index)=>(
                    <Item key={index} data={item}/>
                ))}
            </ul>
        );
    }
}

export default HomeList;
import React, { Component } from 'react';

import './style.scss';

class Collection extends Component {
    render() {
        const {isCollected,buy,collect}=this.props;
        return (
            <div className="collection clear-fix">
                <button type="button" className="collection-add" onClick={collect}>{isCollected? '已收藏': '收 藏'}</button>
                <button type="button" className="collection-buy" onClick={buy}>购 买</button>
            </div>
        );
    }
}

export default Collection;
import React, { Component } from 'react';

import './style.scss';
import SearchInput from '../SearchInput';

class SearchHeader extends Component {
    render() {
        const {goBack,keyword,enterKeyword}=this.props;
        return (
            <header className="search-header clear-fix">
                <div className="search-back" onClick={goBack}>
                    <i className="icon-chevron-left"></i>   
                </div>
                <div className="search-box">
                    <SearchInput value={keyword} enterKeyword={enterKeyword}/>
                </div>
            </header>
        );
    }
}

export default SearchHeader;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import SearchInput from '../SearchInput';

class SearchHeader extends Component {
    static propTypes={
        keyword: PropTypes.string,
        history: PropTypes.shape({
            goBack: PropTypes.func.isRequired,
            push: PropTypes.func.isRequired
        }).isRequired
    };

    goBack=()=>{
        this.props.history.goBack();
    }

    enterKeyword=(value)=>{
        this.props.history.push(`/search/${encodeURIComponent(value)}`);
    }

    render() {
        const {keyword,history}=this.props;
        return (
            <header className="search-header clear-fix">
                <div className="search-back" onClick={this.goBack}>
                    <i className="icon-chevron-left"></i>   
                </div>
                <div className="search-box">
                    <SearchInput value={keyword} enterKeyword={this.enterKeyword}/>
                </div>
            </header>
        );
    }
}

export default SearchHeader;
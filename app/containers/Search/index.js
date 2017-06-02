import React, { Component } from 'react';

import './style.scss';
import SearchHeader from '../../components/SearchHeader';

class Search extends Component {
    enterKeyword=(newKeyword)=>{
        this.props.history.push(`/search/${newKeyword}`);
    };

    goBack=()=>{
        this.props.history.goBack();
    }

    render() {
        const keyword=this.props.match.params.keyword;
        return (
            <div>
                <SearchHeader goBack={this.goBack} keyword={keyword} enterKeyword={this.enterKeyword}/>
            </div>
        );
    }
}

export default Search;
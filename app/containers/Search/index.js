import React, { Component } from 'react';

import './style.scss';
import SearchHeader from '../../components/SearchHeader';

import SearchList from './subpage/SearchList';

class Search extends Component {
    render() {
        const keyword=this.props.match.params.keyword;
        const history=this.props.history;
        return (
            <div>
                <SearchHeader keyword={keyword} history={history}/>
                <SearchList keyword={keyword}/>
            </div>
        );
    }
}



export default Search;
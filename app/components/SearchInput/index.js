import React, { Component } from 'react';

import "./style.scss";

class SearchInput extends Component {
    constructor(props){
        super(props);

        this.state={
            value: this.props.value || ''
        };
    }

    enterKeyword=(e)=>{
        if(e.keyCode===13){
            this.props.enterKeyword(this.state.value);
        }
    }

    componentDidMount(){
        this.refs.input.addEventListener('keyup',this.enterKeyword);
    }

    componentWillUnmount(){
        this.refs.input.removeEventListener('keyup',this.enterKeyword);
    }

    handleChange=(e)=>{
        this.setState({
            value: e.target.value
        });
    };

    render() {
        return (
            <div className="search-input">
                <i className="icon-search"></i>
                <input type="text" placeholder="请输入关键字" value={this.state.value} 
                    onChange={this.handleChange} ref="input"/>
            </div>
        );
    }
}

export default SearchInput;
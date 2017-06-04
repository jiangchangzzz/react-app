import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class LoadMore extends Component {
    static propTypes={
        loadMore: PropTypes.func.isRequired
    };

    componentDidMount(){
        //函数节流
        this.timeoutId=null;
        window.addEventListener('scroll',this.handleScroll);
    }    

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll=()=>{
        if(this.props.isFetching){
            return;
        }

       if(this.timeoutId){
           return;
       }

       this.timeoutId=setTimeout(()=>{
           clearTimeout(this.timeoutId);
           this.timeoutId=null;
           this.callback();
       },500);
    }

    callback=()=>{
        const container=this.refs.container;
        const top=container.getBoundingClientRect().top;
        const height=document.documentElement.clientHeight;
        if(top<height){
            this.props.loadMore();
        }
    }

    render() {
        return (
            <div className="load-more" ref="container">
                {
                    this.props.isFetching
                    ? <div className="load-text">加载中...</div>
                    : <div className="load-text" onClick={this.props.loadMore}>加载更多</div>
                }
            </div>
        );
    }
}

export default LoadMore;
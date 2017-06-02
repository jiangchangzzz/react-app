import React, { Component } from 'react';

import './style.scss';

class LoadMore extends Component {
    componentDidMount(){
        const callback=()=>{
            const container=this.refs.container;
            if(container){
                const top=container.getBoundingClientRect().top;
                const height=document.documentElement.clientHeight;
                if(top<height){
                    this.props.loadMore();
                }
            }
        }

        //函数节流
        let timeoutId=null;
        window.addEventListener('scroll',()=>{
            if(this.props.isFetching){
                return;
            }

            clearTimeout(timeoutId);
            timeoutId=setTimeout(callback,500);
        });
    }    

    componentWilUnmount(){
        window.removeEventListener('scroll');
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
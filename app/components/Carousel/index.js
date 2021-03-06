import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import './style.scss';

class Carousel extends Component {
    constructor(props){
        super(props);

        this.state={
            index: 0
        };
    }

    render() {
        const options={
            continues: false,
            callback: (index)=>{
                this.setState({
                    index: index
                });
            }
        };
        const {index}=this.state;
        return (
            <div className="carousel">
                <ReactSwipe swipeOptions={options}>
                    <div className="swipe-item">
                        <ul className="clear-fix">
                            <li className="jingdian">景点</li>
                            <li className="ktv">KTV</li>
                            <li className="gouwu">购物</li>
                            <li className="shenghuofuwu">生活服务</li>
                            <li className="jianshenyundong">健身运动</li>
                            <li className="meifa">美发</li>
                            <li className="qinzi">亲子</li>
                            <li className="xiaochikuaican">小吃快餐</li>
                            <li className="zizhucan">自助餐</li>
                            <li className="jiuba">酒吧</li>
                        </ul>
                    </div>
                    <div className="swipe-item">
                        <ul className="clear-fix">
                            <li className="meishi">美食</li>
                            <li className="dianying">电影</li>
                            <li className="jiudian">酒店</li>
                            <li className="xuixianyule">休闲娱乐</li>
                            <li className="waimai">外卖</li>
                            <li className="huoguo">火锅</li>
                            <li className="liren">丽人</li>
                            <li className="dujiachuxing">度假出行</li>
                            <li className="zuliaoanmo">足疗按摩</li>
                            <li className="zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div className="swipe-item">
                        <ul className="clear-fix"> 
                            <li className="ribencai">日本菜</li>
                            <li className="SPA">SPA</li>
                            <li className="jiehun">结婚</li>
                            <li className="xuexipeixun">学习培训</li>
                            <li className="xican">西餐</li>
                            <li className="huochejipiao">火车机票</li>
                            <li className="shaokao">烧烤</li>
                            <li className="jiazhuang">家装</li>
                            <li className="chongwu">宠物</li>
                            <li className="quanbufenlei">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="carousel-list">
                    <li className={index===0 ? 'active':''}></li>
                    <li className={index===1 ? 'active':''}></li>
                    <li className={index===2 ? 'active':''}></li>
                </ul>
            </div>
        );
    }
}

export default Carousel;
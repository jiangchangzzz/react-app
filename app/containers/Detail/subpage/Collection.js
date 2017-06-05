import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CollectionComponent from '../../../components/Collection';
import * as collectionActions from '../../../actions/collection';

class Collection extends Component {
    constructor(props){
        super(props);

        this.state={
            isCollected: false
        };
    }

    componentWillMount(){
        const {id,collection}=this.props;
        if(collection.indexOf(id)>=0){
            this.setState({
                isCollected: true
            });
        }
    }

    buy=()=>{
        const {history}=this.props;
        if(this.checkUser()){
            //TODO
            history.push('/user');
        }
    }

    collect=()=>{
        if(this.checkUser()){
            const {collectionActions,id}=this.props;
            if(this.state.isCollected){
                collectionActions.removeCollection(id);
                this.setState({
                    isCollected: false
                });
            }
            else{
                collectionActions.addCollection(id);
                this.setState({
                    isCollected: true
                });
            }
        }
    }

    checkUser=()=>{
        const {userinfo,history}=this.props;
        if(userinfo.username){
            return true;
        }
        else{
            //路由的跳转是异步的
            history.push('/login',{from: history.location});
            return false;
        }
    }

    render() {
        return (
            <CollectionComponent isCollected={this.state.isCollected} buy={this.buy} collect={this.collect}/>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        collection: state.collection,
        userinfo: state.userinfo
    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        collectionActions: bindActionCreators(collectionActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Collection);
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            password: '',
            valid: false
        };
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        const {username,password}=this.state;
        this.props.login({
            username,
            password
        });
    }

    

    changeUsername=(e)=>{
        this.setState({
            username: e.target.value,
            valid: this.check()
        });
    }

    changePassword=(e)=>{
        this.setState({
            password: e.target.value,
            valid: this.check()
        });
    }

    check=()=>{
        const {username,password}=this.state;
        if(username.length>0 && password.length>0){
            return true;
        }
        else{
            return false;
        }
    }

    render() {
        const {username,password,valid}=this.state;
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <div className="form-group">
                            <label htmlFor="username">账户</label>
                            <input type="text" id="username" name="username" placeholder="手机/会员名/邮箱" value={username} onChange={this.changeUsername}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">登录密码</label>
                            <input type="password" id="password" name="password" placeholder="请输入密码" value={password} onChange={this.changePassword}/>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="submit" disabled={!valid}>登录</button>
                    </div>
                </form>
                <div className="link-container">
                    <Link to="/register">新用户注册</Link>
                    <Link to="/forget">忘记密码</Link>
                </div>
            </div>
        );
    }
}

export default Login;
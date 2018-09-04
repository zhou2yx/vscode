import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Utills from '../../utills/utills.js'

class Header extends Component {
    componentWillMount(){
        this.setState({
            userName:'sookyown'
        })
        setInterval(()=>{
            let sysTime = Utills.formateDate(new Date().getTime());
            this.setState({sysTime})
        },1000)
    }
    render() { 
        return (
        <div className="header">
            <Row className="header-top">
                <Col span="24">
                <span>Welcome, {this.state.userName}</span>
                <a href='#'>LOG OUT</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span="4" className="breadcrumb-title">首页</Col>
                <Col span="20" className="weater">
                <span>2018-5-4</span>
                <span>sunny</span>
                </Col>
            </Row>
        </div>  )
    }
}
 
export default Header;
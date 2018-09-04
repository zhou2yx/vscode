import React, { Component } from "react";
import Child from './Child';
import {Button,Input} from 'antd';
// import 'antd/dist/antd.css';
class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <p>React 生命周期介绍</p>
        <Input></Input>
        <Button onClick={this.handleAdd}>antd 点击一下</Button>
        <button onClick={this.handleAdd}>点击一下</button>
        <p>{this.state.count}</p>
        <Child name="Jack"></Child>
      </div>
    );
  }
}

export default Life;

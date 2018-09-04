import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("did mount");
  }

  componentWillReceiveProps() {
    console.log("will props");
  }
  
  render() {
    return <p>{this.props.name}</p>;
  }
}

export default Child;

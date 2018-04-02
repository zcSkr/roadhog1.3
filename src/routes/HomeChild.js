import React, { Component } from 'react';
import { connect } from 'dva';
// import styles from './home.less';

@connect(state => ({
  example: state.example,
}))

export default class HomeChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <div>
        child
      </div>
    );
  }
}

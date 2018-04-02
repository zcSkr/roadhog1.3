import React, { Component } from 'react';
import { Router, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import styles from './home.less';
import HomeChild from './HomeChild';
import SvgIcon from '../common/component/SvgIcon';
import app from '../config/app';

import { Icon } from 'antd-mobile';

@connect(state => ({
  example: state.example,
}))

export default class Home extends Component {
  constructor(props) {
    super(props);
    const defaultSearch = {};
    this.state = {
      entity: null,
      defaultSearch,
      search: { ...defaultSearch },
      page: 0,
    }
  }
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch({
      type: 'example/query',
      payload: this.state.search,
    });
  }

  render() {
    // console.log(this.props)
    const { match, example } = this.props;
    const { data: { list, pagination } } = example;
    console.log(list)

    return (
      <div>
        <div>home</div>
        <div className={styles.word}>
          <SvgIcon type={SvgIcon.glyphs.home} size='md' />
          <SvgIcon type={SvgIcon.glyphs.cart} />
          <Icon type='search' />
        </div>
        <Switch>
          <Route path={`${match.url}/child`} component={HomeChild} />
        </Switch>
        <img src={require('../assets/yay.jpg')} style={{ width: "50%" }} alt="" />
      </div>
    );
  }
}
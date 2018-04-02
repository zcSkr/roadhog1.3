import { connect } from 'dva';

import React, { PropTypes, Component } from 'react';
import { routerRedux } from 'dva/router';
import { Toast, Modal, Flex } from 'antd-mobile';
import styles from './myCenter.less';

import MyCenter from '../../components/myCenter/myCenter';

import { baseRoute, homeRoute, getCurrentUnionuser } from "../../config/app";

class MyCenterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}

  render() {
    const { dispatch, center_mycenter, style, baseOnHash } = this.props;

    // const {
    //   member,
    //   orderstatis,
    //   usecases,
    // } = center_mycenter;

    let rootPath = baseOnHash ? baseRoute + '#' : baseRoute;
    let documentHeight = (style && style.height) ? style.height : document.documentElement.clientHeight;

    const indexProps = {
      // member,
      // orderstatis,
      // usecases,
      onButtonClick(action, data) {
        console.log(action);
        if (action == "cellar") {
          dispatch(routerRedux.push(baseRoute + '/member/cellar'));
        } else if (action == "address") {
          dispatch(routerRedux.push(baseRoute + '/member/address'));
        } else if (action == "allorder" || action == "bade" || action == "biding") {
          dispatch(routerRedux.push(`/myAuction?page=${data}`));
        }
        // } else if (action == "order") {
        //   window.location.href = baseRoute + '/shop/order?status=' + data;
        //   // dispatch(routerRedux.push(baseRoute + '/shop/order?status=' + data));
        // } else if (action == "comment") {
        //   dispatch(routerRedux.push(baseRoute + '/shop/comment'));
        // } else if (action == "balance") {
        //   dispatch(routerRedux.push(baseRoute + '/member/balance'));
        // } else if (action == "points") {
        //   dispatch(routerRedux.push(baseRoute + '/member/points'));
        // } else if (action == "service") {
        //   dispatch(routerRedux.push(baseRoute + '/servicecenter'));
        // } else if (action == "about") {
        //   dispatch(routerRedux.push(baseRoute + '/about'));
        // }
        // console.log('123')
      },
    }

    return (
      <div className={`${styles.normal} global-am`}>
        <MyCenter {...indexProps} />
      </div>
    );
  }
}

function mapStateToProps({}) {
  return {};
}
export default connect(mapStateToProps)(MyCenterPage);

import { connect } from 'dva';

import React, { PropTypes, Component } from 'react';
import { routerRedux } from 'dva/router';

import queryString from 'query-string';
import { isEqual } from 'underscore';

import TabBar from '../components/container/TabBar';
import SvgIcon from '../common/component/SvgIcon';
import NotFound from './NotFound';
//首页
import HomePage from './home/HomePage';

// "我的" 页面
// import MyCenter from './myCenter/MyCenter';


function StorePage({
  location,
  dispatch,
}) {

  let selectedTabKey = "home";
  if (location.search) {
    const parsed = queryString.parse(location.search);
    selectedTabKey = parsed.key;
  }

  //内容属性
  let contentProps = {
    location,
    // baseOnHash: true,
    style: { height: document.documentElement.clientHeight - 50, },
  };

  //底部栏
  let tabs = [{
    key: "home",
    title: "首页",
    icon: <SvgIcon type={SvgIcon.glyphs.shouye} className='shouye' />,
    selectedIcon: <SvgIcon type={SvgIcon.glyphs.shouyeSelected} className='shouyeSelected' />,
    children: <HomePage {...contentProps} />,
  }, {
    key: "fenlei",
    title: "分类",
    icon: <SvgIcon type={SvgIcon.glyphs.fenlei} />,
    selectedIcon: <SvgIcon type={SvgIcon.glyphs.fenleiSelected} />,
    children: <div {...contentProps} >222 </div>,
  }, {
    key: "mycenter",
    title: "我的",
    icon: <SvgIcon type={SvgIcon.glyphs.gerenzhongxin} />,
    selectedIcon: <SvgIcon type={SvgIcon.glyphs.gerenzhongxinSelected} />,
    children: <div {...contentProps}>3333333333</div>,
  }];

  const tabbarProps = {
    tabs,
    selectedTabKey,
    onTabPress: (tab) => {
      let router = location.pathname + '?key=' + tab.key;
      if (isEqual(location.pathname + location.search, router)) return;
      dispatch(routerRedux.push(router));
      // dispatch(routerRedux.push(location.pathname + '#/' + tab.key));
    },
  }

  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
      <TabBar {...tabbarProps} />
    </div>
  );
}

function mapStateToProps({ }) {
  return {};
}
export default connect(mapStateToProps)(StorePage);


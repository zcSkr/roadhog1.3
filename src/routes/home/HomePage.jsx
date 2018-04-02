import { connect } from 'dva';

import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { WhiteSpace } from 'antd-mobile';
import { baseRoute, homeRoute } from "../../config/app";

import CarouselImg from "../../components/home/CarouselImg";
import NoticeCarousel from "../../components/home/NoticeCarousel";
import TabsGrid from "../../components/home/TabsGrid";

function HomePage({
  dispatch,
  location,
  style,
  // home_coursel,
}) {
  // const { list } = home_coursel;
  // console.log(list)
  const handleButtonClick = (id) => {
    // console.log(id);
    dispatch(routerRedux.push(`/bidbrief?id=${id}`))
    // window.location.href = `/bidbrief?id=${id}`
  }
  const CarouselImgProps = {
    list: [],
  }
  const NoticeCarouselProps = {
    list: [],
  }
  const tabsGridProps = {
    handleButtonClick,
  }
  return (
    <div style={{style}}>
      <CarouselImg {...CarouselImgProps} />
      <NoticeCarousel {...NoticeCarouselProps} />
      <WhiteSpace size='sm' />
      <TabsGrid {...tabsGridProps} />
    </div>
  );
};


function mapStateToProps({}) {
  return {};
}
export default connect(mapStateToProps)(HomePage);

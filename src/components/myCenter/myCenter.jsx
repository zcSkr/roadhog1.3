import React, { PropTypes, Component } from 'react';
import { Flex, Icon, WhiteSpace, List, Badge } from 'antd-mobile';
import CustomIcon from '../../common/component/SvgIcon';
const Item = List.Item;
const Brief = Item.Brief;
import styles from './styles.less';

import { imgUrl, svgicon } from '../../config/app';

function MyCenter({
  member,
  loading,
  orderstatis,
  onButtonClick,
  usecases,
}) {

  return (
    <div className={styles.normal+" mycenter"}>
      <div className={styles.userZone}>
        <div className={styles.user}>
          <div className={styles.img}>
            <img src={member?member.wx_headImgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20180210/7512efec95214d5eb42ea8dbe8fd51a7.jpeg'} />
          </div>
          <div className={styles.name}>小乌龟</div>
        </div>
      </div>
      <div className={styles.orderZone}>
        <div className={styles.auctionTitle}>我的竞拍</div>
        <ul className={styles.nav}>
          <li>
            <div className={styles.item} onClick={() => onButtonClick('allorder', 0)}>
              <div className={styles.icon}>
              {
                true?
                <Badge text={12}><CustomIcon type={svgicon.allOrder} /></Badge>:
                <CustomIcon type={svgicon.allOrder} />
              }
              </div>
              <span>全部</span>
            </div>
          </li>
          <li>
            <div className={styles.item} onClick={() => onButtonClick('bade', 1)}>
              <div className={styles.icon}>
              {
                orderstatis?
                <Badge text={orderstatis.status1}><CustomIcon type={svgicon.auctioned} /></Badge>:
                <CustomIcon type={svgicon.auctioned} />
              }
              </div>
              <span>已拍</span>
            </div>
          </li>
          <li>
            <div className={styles.item} onClick={() => onButtonClick('biding',2)}>
              <div className={styles.icon}>
              	<CustomIcon type={svgicon.auctioning} />
              </div> 
              <span>正在拍</span>
            </div>
          </li> 
        </ul>
      </div> 
      <List className={styles.itemsZone}>
        <Item
          thumb={<CustomIcon type={svgicon.address} />}
          arrow="horizontal"
          onClick={() => onButtonClick('address')}
        >我的地址</Item>
        <Item 
          thumb={<CustomIcon type={svgicon.cellar} />}
          arrow="horizontal"
          onClick={() => onButtonClick('cellar')}
        >我的酒窖</Item>
        <Item 
          thumb={<CustomIcon type={svgicon.remainingSum} />}
          arrow="horizontal"
          onClick={() => onButtonClick('remainingSum')}
        >我的余额</Item>
      </List>
      <List className={styles.itemsZone}> 
        <Item
          thumb={<CustomIcon type={svgicon.about} style={{fill:'#FFD700'}} />}
          arrow="horizontal"
          onClick={() => onButtonClick('about')}
        >关于系统</Item>
      </List>
    </div>
  );
}

export default MyCenter;

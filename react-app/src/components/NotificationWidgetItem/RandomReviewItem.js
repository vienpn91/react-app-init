import React, { Component } from 'react';
import { Rate, Avatar } from 'antd';

import {
  NotificationItemWrap,
  RandomReviewItemWrap,
  RandomReviewContentWrap,
  RandomReviewUserName,
  RandowmReviewComment,
} from './NotificationItem.style';

class RandomReviewItem extends Component {
  render() {
    return (
      <NotificationItemWrap>
        <RandomReviewItemWrap>
          <Avatar size={55} style={{ backgroundColor: '#9b59b6' }} icon="user" />

          <RandomReviewContentWrap>
            <RandomReviewUserName>
              <span>John Doe</span>
              <Rate allowHalf defaultValue={5} />
            </RandomReviewUserName>

            <RandowmReviewComment>
              "SocialProof is a 5 star product!"
            </RandowmReviewComment>

            <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
          </RandomReviewContentWrap>
        </RandomReviewItemWrap>
      </NotificationItemWrap>
    );
  }
}

export default RandomReviewItem;
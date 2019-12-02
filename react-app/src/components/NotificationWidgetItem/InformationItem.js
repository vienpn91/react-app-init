import React, { Component } from 'react';
import {
  NotificationItemWrap,
  InformationIcon,
  InformationContent,
  InformationContentHeader,
} from './NotificationItem.style';

class InformationItem extends Component {
  render() {
    return (
      <NotificationItemWrap>
        <InformationIcon src="https://img.icons8.com/nolan/2x/cutting-coupon.png" />

        <InformationContent>
          <InformationContentHeader>
            Flash Sale! <span role="img" aria-label="">&#x1F525;</span>
          </InformationContentHeader>

          <p>Limited sale until tonight, right now!</p>
          <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
        </InformationContent>
      </NotificationItemWrap>
    );
  }
}

export default InformationItem;
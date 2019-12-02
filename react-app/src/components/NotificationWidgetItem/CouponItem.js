import React, { Component } from 'react';
import {
  NotificationItemWrap,
  InformationIcon,
  InformationContent,
  InformationContentHeader,
  InformationCouponCode,
  InformationActionButton,
  InformartionSubText,
} from './NotificationItem.style';

class CouponItem extends Component {
  render() {
    return (
      <NotificationItemWrap>
        <InformationIcon src="https://img.icons8.com/nolan/2x/cutting-coupon.png" />

        <InformationContent>
          <InformationContentHeader>
            35% OFF <span role="img" aria-label="">&#x1F525;</span> !
          </InformationContentHeader>

          <p>Limited summer sale coupon code!</p>

          <InformationCouponCode>
            COUPON20
          </InformationCouponCode>

          <InformationActionButton>
            Get Coupon
          </InformationActionButton>

          <InformartionSubText>No, i don&#39;t want to save money</InformartionSubText>
          <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
        </InformationContent>
      </NotificationItemWrap>
    );
  }
}

export default CouponItem;
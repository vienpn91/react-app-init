import React, { Component } from 'react';
import {
  NotificationItemWrap,
  LiveCounterItemWrap,
  LiveCounterDetailWrap,
  LiveCounterStatus,
  LiveCounterNumber,
  LiveCounterText,
} from './NotificationItem.style';

class LiveCounterItem extends Component {
  render() {
    return (
      <NotificationItemWrap>
        <LiveCounterItemWrap>
          <LiveCounterDetailWrap>
            <LiveCounterStatus />
            <LiveCounterNumber>15</LiveCounterNumber>
          </LiveCounterDetailWrap>

          <LiveCounterText>Active visitors now.</LiveCounterText>

          <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
        </LiveCounterItemWrap>
      </NotificationItemWrap>
    );
  }
}

export default LiveCounterItem;
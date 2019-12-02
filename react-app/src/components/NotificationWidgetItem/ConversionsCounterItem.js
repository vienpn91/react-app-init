import React, { Component } from 'react';
import {
  NotificationItemWrap,
  ConversionsCounterItemWrap,
  ConversionsCounterNumber,
  ConversionsCounterContent,
} from './NotificationItem.style';

class ConversionsCounterItem extends Component {
  render() {
    return (
      <NotificationItemWrap>
        <ConversionsCounterItemWrap>
          <ConversionsCounterNumber>5</ConversionsCounterNumber>

          <ConversionsCounterContent>
            <p>People bought the product</p>

            <span>In the last 2 hours</span>

            <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
          </ConversionsCounterContent>
        </ConversionsCounterItemWrap>
      </NotificationItemWrap>
    );
  }
}

export default ConversionsCounterItem;
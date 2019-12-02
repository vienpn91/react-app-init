import React, { Component } from 'react';

import InformationItem from './InformationItem';
import CouponItem from './CouponItem';
import LiveCounterItem from './LiveCounterItem';
import EmailCollectorItem from './EmailCollectorItem';
import ConversionsCounterItem from './ConversionsCounterItem';
import VideoItem from './VideoItem';
import SocialShareItem from './SocialShareItem';
import RandomReviewItem from './RandomReviewItem';
import CountdownCollectorItem from './CountdownCollectorItem';
import { NotificationWidgetItemWrap } from './NotificationItem.style';
import { WIDGET_TYPE } from '../../utils/enums';

class NotificationWidgetItem extends Component {
  renderNotificationWidgetItem = () => {
    const { widgetType } = this.props;

    switch (widgetType) {
      case WIDGET_TYPE.INFORMATION:
        return <InformationItem />;

      case WIDGET_TYPE.COUPON:
        return <CouponItem />;

      case WIDGET_TYPE.LIVE_COUNTER:
        return <LiveCounterItem />;

      case WIDGET_TYPE.EMAIL_COLLECTOR:
        return <EmailCollectorItem />;

      case WIDGET_TYPE.CONVERSIONS_COUNTER:
        return <ConversionsCounterItem />;

      case WIDGET_TYPE.VIDEO:
        return <VideoItem />;

      case WIDGET_TYPE.SOCIAL_SHARE:
        return <SocialShareItem />;

      case WIDGET_TYPE.RANDOM_REVIEW:
        return <RandomReviewItem />;

      case WIDGET_TYPE.COUNTDOWN_COLLECTOR:
        return <CountdownCollectorItem />;

      default:
        return <InformationItem />;
    }
  }

  render() {
    return (
      <NotificationWidgetItemWrap>
        {this.renderNotificationWidgetItem()}
      </NotificationWidgetItemWrap>
    );
  }
}

export default NotificationWidgetItem;
import React, { Component } from 'react';
import {
  NotificationItemWrap,
  VideoItemWrap,
  VideoHeader,
  VideoIframe,
  VideoButton,
} from './NotificationItem.style';

class VideoItem extends Component {
  render() {
    return (
      <NotificationItemWrap>
        <VideoItemWrap>
          <VideoHeader>
            Demo of the product <span role="img" aria-label="">&#x1F525;</span>
          </VideoHeader>

          <VideoIframe
            src={`https://www.youtube.com/embed/`}
            frameBorder="0"
          />

          <VideoButton>Sign up <span role="img" aria-label="">&#128075;</span></VideoButton>

          <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
        </VideoItemWrap>
      </NotificationItemWrap>
    );
  }
}

export default VideoItem;
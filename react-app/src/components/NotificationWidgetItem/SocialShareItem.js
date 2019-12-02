import React, { Component } from 'react';
import {
  NotificationItemWrap,
  SocialShareItemWrap,
  SocialShareHeader,
  SocialShareLink,
} from './NotificationItem.style';

class SocialShareItem extends Component {
  render() {
    return (
      <NotificationItemWrap>
        <SocialShareItemWrap>
          <SocialShareHeader>
            Tell your friends <span role="img" aria-label="">	&#128187;</span>
          </SocialShareHeader>

          <SocialShareLink>
            <a className="facebook-social" href="" target="_blank">Facebook</a>
            <a className="twitter-social" href="" target="_blank">Twitter</a>
            <a className="linkedin-social" href="" target="_blank">Linkedin</a>
          </SocialShareLink>

          <p>
            We appreciate all the shares to support us!
            <br />
            Thank you!
          </p>

          <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
        </SocialShareItemWrap>
      </NotificationItemWrap>
    );
  }
}

export default SocialShareItem;
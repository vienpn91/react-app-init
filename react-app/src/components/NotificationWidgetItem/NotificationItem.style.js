import styled from 'styled-components';
import { Form } from 'antd';

export const NotificationWidgetItemWrap = styled.div``;

export const NotificationItemWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colorStyled.ColorWhite};
  border-radius: .325em;
  padding: 1em 1.5em;
  box-shadow: ${props => props.theme.boxShadow.headerTable};
  a {
    color: ${props => props.theme.colorStyled.ColorBlack};
    font-size: ${props => props.theme.fontSize.SmallFontSize};
    &:hover {
      text-decoration: underline;
    }
  }
`;

/* Information & Coupon Item */

export const InformationIcon = styled.img`
  width: 4.75em;
  height: auto;
  margin-right: .5em;
`;

export const InformationContent = styled.div`
  p {
    padding: .125em 0em .5em;
  }
`;

export const InformationContentHeader = styled.div`
  font-size: ${props => props.theme.fontSize.HeadingH5FontSize};
`;

export const InformationCouponCode = styled.div`
  padding: .75em 1em;
  margin: .5em 0em;
  border-radius: .325em;
  text-align: center;
  border: 1.5px dashed ${props => props.theme.colorStyled.ColorBlack};
`;

export const InformationActionButton = styled.div`
  padding: .75em 1em;
  margin: 1em 0em;
  border-radius: .325em;
  text-align: center;
  background-color: ${props => props.theme.colorStyled.ColorBlack};
  color: ${props => props.theme.colorStyled.ColorWhite};
`;

export const InformartionSubText = styled.div`
  text-decoration: underline;
  margin-bottom: .5em;
`;

/* Live Counter item */

export const LiveCounterItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0em 2em;
`;

export const LiveCounterDetailWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LiveCounterStatus = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 100%;
  background-color: ${props => props.theme.colorStyled.ColorSusscess};
`;

export const LiveCounterNumber = styled.div`
  padding: .25em 1em;
  margin-left: 1em;
  border-radius: .325em;
  min-width: 5em;
  text-align: center;
  font-size: ${props => props.theme.fontSize.HeadingH5FontSize};
  background-color: ${props => props.theme.colorStyled.ColorBlack};
  color: ${props => props.theme.colorStyled.ColorWhite};
`;

export const LiveCounterText = styled.div`
  margin: 1em 0em;
`;

/* Email Collector item */
export const EmailCollectorItemWrap = styled.div`

`;

export const EmailCollectorHeader = styled.div`
  font-size: ${props => props.theme.fontSize.HeadingH5FontSize};
`;

export const EmailCollectorForm = styled(Form)`
  display: flex;
  margin: 1em 0em .5em;
  .ant-form-item {
    flex: 1;
  }
  .ant-form-item-control {
    line-height: normal;
  }
  .ant-input {
    border: none !important;
    border-radius: 0px !important;
    line-height: 32px !important;
    box-shadow: -3px 5px 7px -2px #7170701a;
  }
`;

export const EmailCollectorAction = styled.div`
  button {
    height: 36px;
    padding: 0 .5em;
    border-radius: 0px 3px 3px 0px;
    background-color: ${props => props.theme.colorStyled.ColorBlack};
    border-color: ${props => props.theme.colorStyled.ColorBlack};
    color: ${props => props.theme.colorStyled.ColorWhite};
    &:hover {
      background-color: ${props => props.theme.colorStyled.ColorBlack};
      border-color: ${props => props.theme.colorStyled.ColorBlack};
    }
    span {
      margin-left: .5em;
    }
  }
`;

/* Counversions Counter item */

export const ConversionsCounterItemWrap = styled.div`
  display: flex;
`;

export const ConversionsCounterNumber = styled(LiveCounterNumber)`
  min-width: auto;
  height: fit-content;
  margin-left: 0em;
  margin-right: 1em;
`;

export const ConversionsCounterContent = styled.div`
  span {
    display: block;
    margin: .5em 0em;
    font-size: ${props => props.theme.fontSize.SmallFontSize};
    color: ${props => props.theme.colorStyled.ColorDarkGrey};
  }
`;

/* Video item */

export const VideoItemWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const VideoHeader = styled.div`
  font-size: ${props => props.theme.fontSize.HeadingH5FontSize};
`;

export const VideoIframe = styled.iframe`
  margin: 1em 0em;
`;

export const VideoButton = styled.div`
  padding: .35em 1em .5em;
  margin-bottom: 1em;
  border-radius: .325em;
  text-align: center;
  background-color: ${props => props.theme.colorStyled.ColorBlack};
  color: ${props => props.theme.colorStyled.ColorWhite};
`;

/* Social Share item */

export const SocialShareItemWrap = styled(VideoItemWrap)`
  p {
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const SocialShareHeader  = styled.div`
  font-size: ${props => props.theme.fontSize.HeadingH5FontSize};
`;

export const SocialShareLink = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1.5em 0em;
  a {
    border-radius: .325em;
    padding: .5em 1em;
    margin: 0em .5em;
    color: ${props => props.theme.colorStyled.ColorWhite};
    font-size: ${props => props.theme.fontSize.BaseFontSize};
    &:hover {
      text-decoration: none;
    }
  }
  .facebook-social {
    background-color: #3d5b99;
  }
  .twitter-social {
    background-color: #22a1f2;
  }
  .linkedin-social {
    background-color: #0078b5;
  }
`;

/* Random Review item */

export const RandomReviewItemWrap = styled.div`
  display: flex;
  .ant-avatar {
    margin-right: .5em;
  }
`;

export const RandomReviewContentWrap = styled.div``;

export const RandomReviewUserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ant-rate {
    margin-left: .5em;
    font-size: ${props => props.theme.fontSize.MediumFontSize};
  }
  .ant-rate-star {
    margin: 0em;
  }
`;

export const RandowmReviewComment = styled.div`
  margin: .5em 0em;
  font-style: italic;
  font-size: ${props => props.theme.fontSize.MediumFontSize};
`;

/* Countdown Collector item */

export const CountdownCollectorItemWrap = styled(VideoItemWrap)`
  p {
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const CountdownCollectorHeader = styled.div`
  font-size: ${props => props.theme.fontSize.HeadingH5FontSize};
`;

export const CountdownCollectorSubHeader = styled.div``;

export const CountdownCollectorTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0em;
`;

export const CountdownClock = styled.div`
  margin: 0em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: .5em;
    border-radius: .325em;
    margin-bottom: .25em;
    font-size: ${props => props.theme.fontSize.HeadingH5FontSize};
    background-color: ${props => props.theme.colorStyled.ColorBlack};
    color: ${props => props.theme.colorStyled.ColorWhite};
  }
`;

export const CountdownCollectorSubText = styled.div`
  text-decoration: underline;
  margin-top: 2em;
`;
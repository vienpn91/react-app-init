import React, { Component } from 'react';
import { Button } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../FormInput';
import {
  NotificationItemWrap,
  CountdownCollectorItemWrap,
  CountdownCollectorHeader,
  CountdownCollectorSubHeader,
  CountdownCollectorTime,
  CountdownClock,
  CountdownCollectorSubText,
  EmailCollectorForm,
  EmailCollectorAction,
} from './NotificationItem.style';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Invalid email'),
});

class CountdownCollectorItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.getTimeRemaining('February 15 , 2020');
    setInterval(() => this.getTimeRemaining('February 15 , 2020'), 1000);
  }

  renderTime = (num) => {
    return <p>{(num < 10 && num > 0) ? "0" + num : num}</p>
  }

  getTimeRemaining(eventDate) {
    const time = Date.parse(eventDate) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  onSubmit = (values) => {
    console.log('login', values);
  }

  renderEmailForm = () => (
    <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <EmailCollectorForm onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              placeholder="Your valid email"
            />
            <EmailCollectorAction>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign up <span role="img" aria-label="">&#9989;</span>
              </Button>
            </EmailCollectorAction>
          </EmailCollectorForm>
        )}
      </Formik>
  )

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <NotificationItemWrap>
        <CountdownCollectorItemWrap>
          <CountdownCollectorHeader>
            Building a website <span role="img" aria-label="">	&#128187;</span>
          </CountdownCollectorHeader>
          <CountdownCollectorSubHeader>
            Free Webinar by us.
          </CountdownCollectorSubHeader>

          <CountdownCollectorSubText>Hurry up! Registration are closing soon.</CountdownCollectorSubText>

          <CountdownCollectorTime>
            <CountdownClock>
              {this.renderTime(days)}
              <span>{days == 1 ? 'day' : 'days'}</span>
            </CountdownClock>
            <CountdownClock>
              {this.renderTime(hours)}
              <span>{hours == 1 ? 'hour' : 'hours'}</span>
            </CountdownClock>
            <CountdownClock>
              {this.renderTime(minutes)}
              <span>{minutes == 1 ? 'minute' : 'minutes'}</span>
            </CountdownClock>
            <CountdownClock>
              {this.renderTime(seconds)}
              <span>{seconds == 1 ? 'second' : 'seconds'}</span>
            </CountdownClock>
          </CountdownCollectorTime>

          {this.renderEmailForm()}

          <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
        </CountdownCollectorItemWrap>
      </NotificationItemWrap>
    );
  }
}

export default CountdownCollectorItem;
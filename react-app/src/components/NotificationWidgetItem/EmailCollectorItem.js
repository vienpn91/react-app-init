import React, { Component } from 'react';
import { Button } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../FormInput';
import {
  NotificationItemWrap,
  EmailCollectorItemWrap,
  EmailCollectorHeader,
  EmailCollectorForm,
  EmailCollectorAction,
} from './NotificationItem.style';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Invalid email'),
});

class EmailCollectorItem extends Component {
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
                Sign me up <span role="img" aria-label="">&#9989;</span>
              </Button>
            </EmailCollectorAction>
          </EmailCollectorForm>
        )}
      </Formik>
  )

  render() {
    return (
      <NotificationItemWrap>
        <EmailCollectorItemWrap>
          <EmailCollectorHeader>
            SIGN UP <span role="img" aria-label="">&#x1F525;</span>
          </EmailCollectorHeader>

          <p>We do not send out spam email &#38; you can unsubcribe at any point</p>

          {this.renderEmailForm()}

          <a href="https://app.sitevibes.com/">Powered by SiteVibes</a>
        </EmailCollectorItemWrap>
      </NotificationItemWrap>
    );
  }
}

export default EmailCollectorItem;
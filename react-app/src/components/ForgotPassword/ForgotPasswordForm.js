import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

import { RegisterAction } from '../RegisterPage/RegisterPage.style';

class ForgotPasswordForm extends Component {
  render() {
    return (
      <Form>
        <Form.Item label="Email Address">
          <Input
            placeholder="Email Address"
            type="email"
            id="emailAddress"
          />
        </Form.Item>

        <RegisterAction>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </RegisterAction>
      </Form>
    );
  }
}

export default ForgotPasswordForm;
import React, { Component } from 'react';
import { Form, Input, Checkbox, Icon, Button, Row, Col } from 'antd';

import {
  RegisterAction,
  RegisterForgot,
} from '../RegisterPage/RegisterPage.style';

class LoginForm extends Component {
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

        <Form.Item label="Password" hasFeedback>
          <Input
            placeholder="Password"
            type="password"
            id="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>

        <Row>
          <Col span={12}>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Col>

          <RegisterForgot href="/forgot-password">Forgot password ?</RegisterForgot>
        </Row>

        <RegisterAction>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <span>
            Or Don't have an account?
            <a href="/register">Sign up now!</a>
          </span>
        </RegisterAction>
      </Form>
    );
  }
}

export default LoginForm;
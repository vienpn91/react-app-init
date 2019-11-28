import React, { Component } from 'react';
import { Form, Checkbox, Button, Row, Col } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../FormInput';
import {
  RegisterAction,
  RegisterForgot,
} from '../RegisterPage/RegisterPage.style';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Invalid email'),
  password: Yup.string().trim().required('Password is required'),
});

class LoginForm extends Component {
  onSubmitLogin = (values) => {
    console.log('login', values);
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmitLogin}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="Email Address"
            />
            <FormInput
              type="password"
              name="password"
              label="Password"
            />
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
        )}
      </Formik>

    );
  }
}

export default LoginForm;
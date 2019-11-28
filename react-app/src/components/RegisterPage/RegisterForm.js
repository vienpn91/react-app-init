import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../FormInput';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().trim().required('First name is required'),
  lastName: Yup.string().trim().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Invalid email'),
  companyName: Yup.string().trim().required('Company name is required'),
  password: Yup.string().trim()
    .notOneOf(['123456', 123456], 'The password is not 123456')
    .min(6, 'The password is greater than 6 characters')
    .max(50, 'The password must have at most 50 characters')
    .matches(/[A-Z]/, 'The password contains at least one uppercase character')
    .matches(/[0-9]/, 'The password contains at least one number')
    .required('Password is required'),
});

class RegisterForm extends Component {
  onSubmitRegister = (values) => {
    console.log('register', values);
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmitRegister}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <FormInput
                  type="text"
                  name="firstName"
                  label="First Name"
                />
              </Col>

              <Col span={12}>
                <FormInput
                  type="text"
                  name="lastName"
                  label="Last Name"
                />
              </Col>
            </Row>
            <FormInput
              type="email"
              name="email"
              label="Email Address"
            />
            <FormInput
              type="text"
              name="companyName"
              label="Company Name"
            />
            <FormInput
              type="password"
              name="password"
              label="Password"
            />
            <Form.Item className="submit-button">
              <Button type="primary" htmlType="submit">
                Create Account
            </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    );
  }
}

export default RegisterForm;
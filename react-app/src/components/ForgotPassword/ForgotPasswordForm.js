import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../FormInput';
import { RegisterAction } from '../RegisterPage/RegisterPage.style';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Invalid email'),
});

class ForgotPasswordForm extends Component {
  onSubmit = (values) => {
    console.log('login', values);
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="Email Address"
            />

            <RegisterAction>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
            </Button>
            </RegisterAction>
          </Form>
        )}
      </Formik>

    );
  }
}

export default ForgotPasswordForm;
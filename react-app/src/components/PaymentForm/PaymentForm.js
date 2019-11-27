import React, { Component } from 'react';
import { Form, Button } from 'antd';

import CompanyInfoForm from './CompanyInfoForm';
import PaymentMethodForm from './PaymentMethodForm';
import {
  PaymentFormContainer,
} from '../PaymentPage/PaymentPage.style';

const WrapCompanyInfoForm = Form.create()(CompanyInfoForm);
const WrapPaymentMethodForm = Form.create()(PaymentMethodForm);

class PaymentForm extends Component {
  render() {
    return (
      <PaymentFormContainer>
        <Form>
          <WrapCompanyInfoForm />
          <WrapPaymentMethodForm />
          <Form.Item className="review-order-button">
            <Button type="primary" htmlType="submit">
              Review Order
            </Button>
          </Form.Item>
        </Form>
      </PaymentFormContainer>
    );
  }
}

export default PaymentForm;